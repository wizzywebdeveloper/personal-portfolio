import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

let supabaseClient;
try {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
} catch (e) {
  console.warn('Supabase client could not be initialized. Testimonials DB features are disabled.');
  supabaseClient = null;
}

export const supabase = supabaseClient;
