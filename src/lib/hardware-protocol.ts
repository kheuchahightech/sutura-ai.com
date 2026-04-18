/**
 * SUTURA AI — Hardware Communication Protocol v1.0
 *
 * Ce fichier définit le format exact des payloads envoyés par la Smart Box ESP32
 * vers Supabase via la librairie ESPSupabase (github.com/jhagas/ESPSupabase)
 *
 * FIRMWARE ARDUINO EXAMPLE (à flasher sur l'ESP32):
 *
 * #include <WiFi.h>
 * #include <ESPSupabase.h>
 *
 * Supabase db;
 * db.begin(supabase_url, supabase_key);
 * db.insert("sensor_readings", payload, false);
 *
 * VALVE COMMAND LISTENER:
 * db.realtime.on("valve_commands", callback);
 */

export interface SensorReading {
  id: string
  device_id: string
  parcelle_id: string
  humidity_soil: number
  temperature_air: number
  hygrometry: number
  battery_level: number
  solar_charging: boolean
  rssi: number | null
  created_at: string
}

export interface ValveCommand {
  id: string
  device_id: string
  parcelle_id: string
  valve_id: number
  action: 'open' | 'close'
  triggered_by: 'manual' | 'auto' | 'samba_voice' | 'samba_edge'
  confirmed_at: string | null
  created_at: string
}

export interface SambaEvent {
  id: string
  device_id: string
  parcelle_id: string
  event_type: 'voice_wolof' | 'voice_pulaar' | 'voice_french' | 'edge_decision' | 'vision_alert' | 'sensor_anomaly'
  raw_transcript: string | null
  detected_action: string
  confidence: number | null
  processed_offline: boolean
  created_at: string
}

export interface NodeStatus {
  device_id: string
  parcelle_id: string
  firmware_version: string | null
  rssi: number | null
  battery_level: number | null
  solar_charging: boolean
  last_seen_at: string
  uptime_seconds: number | null
  free_heap: number | null
}

export interface Alert {
  id: string
  parcelle_id: string
  device_id: string | null
  level: 'critical' | 'warning' | 'info' | 'ok'
  category: 'humidity' | 'temperature' | 'battery' | 'valve' | 'vision' | 'connectivity'
  message: string
  resolved: boolean
  created_at: string
}

export type NodeStatusType = 'online' | 'offline' | 'busy'

export const PARCELLES = [
  { id: 'cayar-a', name: 'Parcelle A - Cayar', culture: 'Tomates', nodeStatus: 'online' as NodeStatusType },
  { id: 'mboro-b', name: 'Parcelle B - Mboro', culture: 'Oignons', nodeStatus: 'offline' as NodeStatusType },
  { id: 'daust-serre', name: 'Serre Test - DAUST', culture: 'Poivrons', nodeStatus: 'online' as NodeStatusType },
] as const

export const VALVES = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Vanne ${String(i + 1).padStart(2, '0')}`,
  zone: ['Zone A — Tomates', 'Zone A — Tomates', 'Zone B — Oignons', 'Zone B — Oignons',
         'Zone C — Poivrons', 'Zone C — Poivrons', 'Zone D — Pépinière', 'Zone D — Pépinière',
         'Zone E — Réserve', 'Zone E — Réserve', 'Zone F — Test', 'Zone F — Test'][i],
  defaultOpen: [1, 3, 7].includes(i + 1),
}))

export const MOCK_READINGS: SensorReading[] = Array.from({ length: 20 }, (_, i) => ({
  id: `mock-${i}`,
  device_id: 'ESP32-CAY-001',
  parcelle_id: 'cayar-a',
  humidity_soil: Math.round((60 + Math.sin(i * 0.5) * 12 + Math.random() * 4) * 10) / 10,
  temperature_air: Math.round((33 + Math.cos(i * 0.3) * 2 + Math.random() * 1) * 10) / 10,
  hygrometry: Math.round((57 + Math.random() * 6) * 10) / 10,
  battery_level: Math.round((92 - i * 0.1) * 10) / 10,
  solar_charging: true,
  rssi: -62,
  created_at: new Date(Date.now() - (20 - i) * 72000).toISOString(),
}))
