import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zvcripwxrxqbrifwejrk.supabase.co";

const supabaseKey =
  "sb_publishable_oJWFf-C1IiFLVwQLjTktcg_g-gCYsf1";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);