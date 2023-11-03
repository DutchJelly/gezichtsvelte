import { supabase } from "./supabase";

export async function getArticle(topic: string) {
  return supabase
    .from("Articles")
    .select("text")
    .filter("category", "eq", topic);
}
