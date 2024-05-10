import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ubuumshsmpsuflfpmpsn.supabase.co";
const supabaseKey = process.env.SUPABASE_PUBLIC_ANON_KEY;
if (!supabaseKey) {
  throw new Error("Missing env variable: SUPABASE_PUBLIC_ANON_KEY");
}
const supabase = createClient(supabaseUrl, supabaseKey);
