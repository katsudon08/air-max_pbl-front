import { createClient } from "@supabase/supabase-js";
import { SUPABASE_CONFIG } from "@/constants/supabase";
import { Weather } from "@/types/weather";

export const supabase = createClient<Weather>(
    SUPABASE_CONFIG.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_CONFIG.NEXT_PUBLIC_SUPABASE_ANON_KEY
)