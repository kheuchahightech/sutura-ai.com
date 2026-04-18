export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      agrifinance_scores: {
        Row: {
          computed_at: string | null
          estimated_yield: number | null
          id: string
          irrigation_regularity: number | null
          parcelle_id: string
          score: number | null
          sensor_health: number | null
        }
        Insert: {
          computed_at?: string | null
          estimated_yield?: number | null
          id?: string
          irrigation_regularity?: number | null
          parcelle_id: string
          score?: number | null
          sensor_health?: number | null
        }
        Update: {
          computed_at?: string | null
          estimated_yield?: number | null
          id?: string
          irrigation_regularity?: number | null
          parcelle_id?: string
          score?: number | null
          sensor_health?: number | null
        }
        Relationships: []
      }
      alerts: {
        Row: {
          category: string
          created_at: string | null
          device_id: string | null
          id: string
          level: string
          message: string
          parcelle_id: string
          resolved: boolean | null
        }
        Insert: {
          category: string
          created_at?: string | null
          device_id?: string | null
          id?: string
          level: string
          message: string
          parcelle_id: string
          resolved?: boolean | null
        }
        Update: {
          category?: string
          created_at?: string | null
          device_id?: string | null
          id?: string
          level?: string
          message?: string
          parcelle_id?: string
          resolved?: boolean | null
        }
        Relationships: []
      }
      credit_transactions: {
        Row: {
          amount: number
          created_at: string
          description: string | null
          id: string
          type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          description?: string | null
          id?: string
          type: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      node_status: {
        Row: {
          battery_level: number | null
          created_at: string | null
          device_id: string
          firmware_version: string | null
          free_heap: number | null
          last_seen_at: string | null
          parcelle_id: string
          rssi: number | null
          solar_charging: boolean | null
          uptime_seconds: number | null
        }
        Insert: {
          battery_level?: number | null
          created_at?: string | null
          device_id: string
          firmware_version?: string | null
          free_heap?: number | null
          last_seen_at?: string | null
          parcelle_id: string
          rssi?: number | null
          solar_charging?: boolean | null
          uptime_seconds?: number | null
        }
        Update: {
          battery_level?: number | null
          created_at?: string | null
          device_id?: string
          firmware_version?: string | null
          free_heap?: number | null
          last_seen_at?: string | null
          parcelle_id?: string
          rssi?: number | null
          solar_charging?: boolean | null
          uptime_seconds?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          country: string | null
          created_at: string
          credits: number
          full_name: string | null
          id: string
          onboarding_completed: boolean
          org_name: string | null
          org_profile: string | null
          phone: string | null
          selected_services: string[] | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          country?: string | null
          created_at?: string
          credits?: number
          full_name?: string | null
          id: string
          onboarding_completed?: boolean
          org_name?: string | null
          org_profile?: string | null
          phone?: string | null
          selected_services?: string[] | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          country?: string | null
          created_at?: string
          credits?: number
          full_name?: string | null
          id?: string
          onboarding_completed?: boolean
          org_name?: string | null
          org_profile?: string | null
          phone?: string | null
          selected_services?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      samba_events: {
        Row: {
          confidence: number | null
          created_at: string | null
          detected_action: string
          device_id: string
          event_type: string
          id: string
          parcelle_id: string
          processed_offline: boolean | null
          raw_transcript: string | null
        }
        Insert: {
          confidence?: number | null
          created_at?: string | null
          detected_action: string
          device_id: string
          event_type: string
          id?: string
          parcelle_id: string
          processed_offline?: boolean | null
          raw_transcript?: string | null
        }
        Update: {
          confidence?: number | null
          created_at?: string | null
          detected_action?: string
          device_id?: string
          event_type?: string
          id?: string
          parcelle_id?: string
          processed_offline?: boolean | null
          raw_transcript?: string | null
        }
        Relationships: []
      }
      sensor_readings: {
        Row: {
          battery_level: number
          created_at: string | null
          device_id: string
          humidity_soil: number
          hygrometry: number
          id: string
          parcelle_id: string
          rssi: number | null
          solar_charging: boolean | null
          temperature_air: number
        }
        Insert: {
          battery_level: number
          created_at?: string | null
          device_id: string
          humidity_soil: number
          hygrometry: number
          id?: string
          parcelle_id: string
          rssi?: number | null
          solar_charging?: boolean | null
          temperature_air: number
        }
        Update: {
          battery_level?: number
          created_at?: string | null
          device_id?: string
          humidity_soil?: number
          hygrometry?: number
          id?: string
          parcelle_id?: string
          rssi?: number | null
          solar_charging?: boolean | null
          temperature_air?: number
        }
        Relationships: []
      }
      valve_commands: {
        Row: {
          action: string
          confirmed_at: string | null
          created_at: string | null
          device_id: string
          id: string
          parcelle_id: string
          triggered_by: string
          valve_id: number
        }
        Insert: {
          action: string
          confirmed_at?: string | null
          created_at?: string | null
          device_id: string
          id?: string
          parcelle_id: string
          triggered_by: string
          valve_id: number
        }
        Update: {
          action?: string
          confirmed_at?: string | null
          created_at?: string | null
          device_id?: string
          id?: string
          parcelle_id?: string
          triggered_by?: string
          valve_id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
