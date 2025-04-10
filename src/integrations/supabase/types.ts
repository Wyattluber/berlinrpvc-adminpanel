export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      account_deletion_requests: {
        Row: {
          created_at: string
          id: string
          processed_at: string | null
          reason: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          processed_at?: string | null
          reason: string
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          processed_at?: string | null
          reason?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      admin_users: {
        Row: {
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      announcement_comments: {
        Row: {
          announcement_id: string
          content: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          announcement_id: string
          content: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          announcement_id?: string
          content?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "announcement_comments_announcement_id_fkey"
            columns: ["announcement_id"]
            isOneToOne: false
            referencedRelation: "announcements"
            referencedColumns: ["id"]
          },
        ]
      }
      announcement_reads: {
        Row: {
          announcement_id: string
          id: string
          read_at: string
          user_id: string
        }
        Insert: {
          announcement_id: string
          id?: string
          read_at?: string
          user_id: string
        }
        Update: {
          announcement_id?: string
          id?: string
          read_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "announcement_reads_announcement_id_fkey"
            columns: ["announcement_id"]
            isOneToOne: false
            referencedRelation: "announcements"
            referencedColumns: ["id"]
          },
        ]
      }
      announcements: {
        Row: {
          content: string
          created_at: string
          id: string
          is_server_wide: boolean
          published_at: string | null
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_server_wide?: boolean
          published_at?: string | null
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_server_wide?: boolean
          published_at?: string | null
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      application_seasons: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          name?: string
        }
        Relationships: []
      }
      applications: {
        Row: {
          activity_level: number
          admin_experience: string | null
          age: number
          bodycam_understanding: string
          created_at: string
          discord_id: string
          friend_rule_violation: string
          frp_understanding: string
          id: string
          notes: string | null
          other_servers: string | null
          roblox_id: string
          roblox_username: string
          season_id: string | null
          server_age_understanding: string
          situation_handling: string
          status: string
          taschen_rp_understanding: string
          updated_at: string
          user_id: string
          vdm_understanding: string
        }
        Insert: {
          activity_level: number
          admin_experience?: string | null
          age: number
          bodycam_understanding: string
          created_at?: string
          discord_id: string
          friend_rule_violation: string
          frp_understanding: string
          id?: string
          notes?: string | null
          other_servers?: string | null
          roblox_id: string
          roblox_username: string
          season_id?: string | null
          server_age_understanding: string
          situation_handling: string
          status?: string
          taschen_rp_understanding: string
          updated_at?: string
          user_id: string
          vdm_understanding: string
        }
        Update: {
          activity_level?: number
          admin_experience?: string | null
          age?: number
          bodycam_understanding?: string
          created_at?: string
          discord_id?: string
          friend_rule_violation?: string
          frp_understanding?: string
          id?: string
          notes?: string | null
          other_servers?: string | null
          roblox_id?: string
          roblox_username?: string
          season_id?: string | null
          server_age_understanding?: string
          situation_handling?: string
          status?: string
          taschen_rp_understanding?: string
          updated_at?: string
          user_id?: string
          vdm_understanding?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_season_id_fkey"
            columns: ["season_id"]
            isOneToOne: false
            referencedRelation: "application_seasons"
            referencedColumns: ["id"]
          },
        ]
      }
      auth_logs: {
        Row: {
          created_at: string
          event_type: string
          id: string
          ip_address: string | null
          metadata: Json | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      id_change_requests: {
        Row: {
          created_at: string
          field_name: string
          id: string
          new_value: string
          processed_at: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          field_name: string
          id?: string
          new_value: string
          processed_at?: string | null
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          field_name?: string
          id?: string
          new_value?: string
          processed_at?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      news: {
        Row: {
          content: string
          created_at: string
          id: string
          is_server_wide: boolean
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_server_wide?: boolean
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_server_wide?: boolean
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      partner_servers: {
        Row: {
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          members: number | null
          name: string
          owner: string | null
          type: string | null
          updated_at: string
          website: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          members?: number | null
          name: string
          owner?: string | null
          type?: string | null
          updated_at?: string
          website: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          members?: number | null
          name?: string
          owner?: string | null
          type?: string | null
          updated_at?: string
          website?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          discord_id: string | null
          id: string
          roblox_id: string | null
          updated_at: string | null
          username: string | null
          username_changed_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          discord_id?: string | null
          id: string
          roblox_id?: string | null
          updated_at?: string | null
          username?: string | null
          username_changed_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          discord_id?: string | null
          id?: string
          roblox_id?: string | null
          updated_at?: string | null
          username?: string | null
          username_changed_at?: string | null
        }
        Relationships: []
      }
      server_stats: {
        Row: {
          discordMembers: number
          id: number
          lastUpdated: string
          partnerServers: number
          servers: number
        }
        Insert: {
          discordMembers?: number
          id?: number
          lastUpdated?: string
          partnerServers?: number
          servers?: number
        }
        Update: {
          discordMembers?: number
          id?: number
          lastUpdated?: string
          partnerServers?: number
          servers?: number
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          id: string
          key: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          key: string
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          id?: string
          key?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      sub_servers: {
        Row: {
          color: string
          created_at: string
          description: string | null
          icon: string
          id: string
          link: string | null
          name: string
          status: string
          updated_at: string
        }
        Insert: {
          color?: string
          created_at?: string
          description?: string | null
          icon?: string
          id?: string
          link?: string | null
          name: string
          status?: string
          updated_at?: string
        }
        Update: {
          color?: string
          created_at?: string
          description?: string | null
          icon?: string
          id?: string
          link?: string | null
          name?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      team_absences: {
        Row: {
          created_at: string
          end_date: string
          id: string
          reason: string
          start_date: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          end_date: string
          id?: string
          reason: string
          start_date?: string
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          end_date?: string
          id?: string
          reason?: string
          start_date?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      username_blacklist: {
        Row: {
          created_at: string
          id: string
          word: string
        }
        Insert: {
          created_at?: string
          id?: string
          word: string
        }
        Update: {
          created_at?: string
          id?: string
          word?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_admin_user: {
        Args: {
          discord_id_param: string
        }
        Returns: string
      }
      get_users_by_ids: {
        Args: {
          user_ids: string[]
        }
        Returns: Json[]
      }
      is_admin: {
        Args: {
          user_uuid: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
