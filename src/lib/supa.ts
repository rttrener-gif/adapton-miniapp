import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// чтобы проект собирался даже без env
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase env vars are not set. Client will not work, using placeholder.'
  );
}

export const supa = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;