import { useState, useEffect } from 'react';

export interface SensorReading {
  id: string;
  humidity: number;
  temperature: number;
  hygrometry: number;
  tank_level: number;
  battery: number;
  created_at: string;
}

function generateMockReadings(count: number): SensorReading[] {
  const now = Date.now();
  return Array.from({ length: count }, (_, i) => ({
    id: `mock-${i}`,
    humidity: 55 + Math.random() * 30,
    temperature: 28 + Math.random() * 10,
    hygrometry: 40 + Math.random() * 35,
    tank_level: 60 + Math.random() * 30,
    battery: 80 + Math.random() * 18,
    created_at: new Date(now - (count - i) * 3600000).toISOString(),
  }));
}

export function useSensorData() {
  const [readings, setReadings] = useState<SensorReading[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use mock data (no Supabase configured)
    const mock = generateMockReadings(24);
    setReadings(mock);
    setLoading(false);

    // Simulate realtime updates
    const interval = setInterval(() => {
      setReadings(prev => {
        const newReading: SensorReading = {
          id: `mock-${Date.now()}`,
          humidity: 55 + Math.random() * 30,
          temperature: 28 + Math.random() * 10,
          hygrometry: 40 + Math.random() * 35,
          tank_level: 60 + Math.random() * 30,
          battery: 80 + Math.random() * 18,
          created_at: new Date().toISOString(),
        };
        return [...prev.slice(1), newReading];
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const latestReading = readings[readings.length - 1] ?? null;

  return { readings, latestReading, loading };
}
