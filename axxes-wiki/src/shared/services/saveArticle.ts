import { getArticle } from "./getArticle";
import { supabase } from "./supabase";

export async function saveArticle(topic: string, article: string) {
  let exists = await getArticle(topic).then((res) => !!res?.data?.length);

  if (exists) {
    return supabase
      .from("Articles")
      .update({ text: article })
      .eq("category", topic)
      .select();
  }

  return supabase
    .from("Articles")
    .upsert({ category: topic, text: article })
    .select();
}
