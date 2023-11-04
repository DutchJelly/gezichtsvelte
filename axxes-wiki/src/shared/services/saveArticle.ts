import { getArticle } from "./getArticle";
import { mockData } from "./mockDatabase";
import { supabase } from "./supabase";

export async function saveArticle(topic: string, article: string) {
  //In case we cannot connect to supabase
  if (!supabase) {
    const existingArticle = mockData.articles.find((a) => a.category === topic);
    if (existingArticle) {
      existingArticle.text = article;
    } else {
      mockData.articles.push({ category: topic, text: article });
    }
    return true;
  }

  const exists = await getArticle(topic).then(Boolean);

  if (exists) {
    return supabase
      .from("Articles")
      .update({ text: article })
      .eq("category", topic)
      .select()
      .then((res) => {
        return !res.error;
      });
  }

  return supabase
    .from("Articles")
    .upsert({ category: topic, text: article })
    .select()
    .then((res) => {
      return !res.error;
    });
}
