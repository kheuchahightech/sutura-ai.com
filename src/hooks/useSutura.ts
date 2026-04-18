import { useState, useEffect, useCallback, useRef } from 'react'
import { supabase } from '@/integrations/supabase/client'
import type { SensorReading, NodeStatus, Alert, SambaEvent } from '@/lib/hardware-protocol'
import { MOCK_READINGS } from '@/lib/hardware-protocol'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const IS_CONNECTED = !!SUPABASE_URL

export function useSutura(parcelleId: string) {
  const [readings, setReadings] = useState<SensorReading[]>(MOCK_READINGS)
  const [latestReading, setLatestReading] = useState<SensorReading>(MOCK_READINGS[MOCK_READINGS.length - 1])
  const [nodes, setNodes] = useState<NodeStatus[]>([])
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [sambaEvents, setSambaEvents] = useState<SambaEvent[]>([])
  const [isLive, setIsLive] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [dataSource, setDataSource] = useState<'mock' | 'supabase'>('mock')
  const mockIntervalRef = useRef<ReturnType<typeof setInterval>>()

  const updateMockData = useCallback(() => {
    setReadings(prev => {
      const last = prev[prev.length - 1]
      const newReading: SensorReading = {
        ...last,
        id: `mock-${Date.now()}`,
        humidity_soil: Math.round(Math.max(35, Math.min(85,
          last.humidity_soil + (Math.random() - 0.47) * 2.5)) * 10) / 10,
        temperature_air: Math.round(Math.max(28, Math.min(42,
          last.temperature_air + (Math.random() - 0.5) * 0.8)) * 10) / 10,
        hygrometry: Math.round(Math.max(40, Math.min(80,
          last.hygrometry + (Math.random() - 0.5) * 1.5)) * 10) / 10,
        created_at: new Date().toISOString(),
      }
      const updated = [...prev.slice(-19), newReading]
      setLatestReading(newReading)
      return updated
    })
  }, [])

  useEffect(() => {
    if (!IS_CONNECTED) {
      setIsLoading(false)
      setDataSource('mock')
      mockIntervalRef.current = setInterval(updateMockData, 4000)
      return () => clearInterval(mockIntervalRef.current)
    }

    setDataSource('supabase')

    const fetchInitial = async () => {
      setIsLoading(true)
      try {
        const { data } = await supabase
          .from('sensor_readings')
          .select('*')
          .eq('parcelle_id', parcelleId)
          .order('created_at', { ascending: false })
          .limit(20)

        if (data && data.length > 0) {
          const mapped = data.reverse().map(r => ({
            ...r,
            humidity_soil: Number(r.humidity_soil),
            temperature_air: Number(r.temperature_air),
            hygrometry: Number(r.hygrometry),
            battery_level: Number(r.battery_level),
            solar_charging: r.solar_charging ?? false,
            created_at: r.created_at ?? new Date().toISOString(),
          })) as SensorReading[]
          setReadings(mapped)
          setLatestReading(mapped[mapped.length - 1])
          setIsLive(true)
        } else {
          mockIntervalRef.current = setInterval(updateMockData, 4000)
        }

        const { data: alertData } = await supabase
          .from('alerts')
          .select('*')
          .eq('parcelle_id', parcelleId)
          .order('created_at', { ascending: false })
          .limit(10)
        if (alertData) setAlerts(alertData.map(a => ({
          ...a,
          created_at: a.created_at ?? new Date().toISOString(),
        })) as Alert[])

        const { data: nodeData } = await supabase
          .from('node_status')
          .select('*')
          .eq('parcelle_id', parcelleId)
        if (nodeData) setNodes(nodeData.map(n => ({
          ...n,
          battery_level: n.battery_level ? Number(n.battery_level) : null,
          solar_charging: n.solar_charging ?? false,
          last_seen_at: n.last_seen_at ?? new Date().toISOString(),
          created_at: n.created_at ?? new Date().toISOString(),
        })) as NodeStatus[])

        const { data: sambaData } = await supabase
          .from('samba_events')
          .select('*')
          .eq('parcelle_id', parcelleId)
          .order('created_at', { ascending: false })
          .limit(20)
        if (sambaData) setSambaEvents(sambaData.map(s => ({
          ...s,
          processed_offline: s.processed_offline ?? false,
          created_at: s.created_at ?? new Date().toISOString(),
        })) as SambaEvent[])
      } catch {
        mockIntervalRef.current = setInterval(updateMockData, 4000)
      }
      setIsLoading(false)
    }

    fetchInitial()

    const channel = supabase
      .channel(`sutura-${parcelleId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'sensor_readings',
        filter: `parcelle_id=eq.${parcelleId}`,
      }, (payload) => {
        clearInterval(mockIntervalRef.current)
        const r = payload.new as any
        const newReading: SensorReading = {
          ...r,
          humidity_soil: Number(r.humidity_soil),
          temperature_air: Number(r.temperature_air),
          hygrometry: Number(r.hygrometry),
          battery_level: Number(r.battery_level),
          solar_charging: r.solar_charging ?? false,
          created_at: r.created_at ?? new Date().toISOString(),
        }
        setReadings(prev => [...prev.slice(-19), newReading])
        setLatestReading(newReading)
        setIsLive(true)
        setDataSource('supabase')
      })
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'alerts',
        filter: `parcelle_id=eq.${parcelleId}`,
      }, (payload) => {
        const a = payload.new as any
        setAlerts(prev => [{ ...a, created_at: a.created_at ?? new Date().toISOString() } as Alert, ...prev.slice(0, 9)])
      })
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'samba_events',
        filter: `parcelle_id=eq.${parcelleId}`,
      }, (payload) => {
        const s = payload.new as any
        setSambaEvents(prev => [{ ...s, processed_offline: s.processed_offline ?? false, created_at: s.created_at ?? new Date().toISOString() } as SambaEvent, ...prev.slice(0, 19)])
      })
      .subscribe()

    return () => {
      clearInterval(mockIntervalRef.current)
      supabase.removeChannel(channel)
    }
  }, [parcelleId, updateMockData])

  const sendValveCommand = useCallback(async (
    valveId: number,
    action: 'open' | 'close',
    triggeredBy: 'manual' | 'samba_voice' = 'manual'
  ) => {
    if (!IS_CONNECTED) return { success: true, mock: true }
    try {
      const { error } = await supabase.from('valve_commands').insert({
        device_id: `ESP32-${parcelleId.toUpperCase().replace('-', '-')}-001`,
        parcelle_id: parcelleId,
        valve_id: valveId,
        action,
        triggered_by: triggeredBy,
      })
      return { success: !error, error }
    } catch {
      return { success: false }
    }
  }, [parcelleId])

  return {
    readings, latestReading, nodes, alerts, sambaEvents,
    isLive, isLoading, dataSource, sendValveCommand,
    IS_CONNECTED,
  }
}
