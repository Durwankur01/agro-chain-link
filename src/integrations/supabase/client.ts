// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ajjsepcqzvnpvuyyooza.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqanNlcGNxenZucHZ1eXlvb3phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NjQ2MjIsImV4cCI6MjA2OTA0MDYyMn0.O9ignkB-by_RgVrEoKyY1dqjzML-7VoI99EHwDdDgsY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});