import { supabase } from "./supabase";

export async function getTopics() {
  return supabase.from("Articles").select("category");
}
