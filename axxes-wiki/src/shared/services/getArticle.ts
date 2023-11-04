import { mockData } from "./mockDatabase";
import { supabase } from "./supabase";

export async function getArticle(topic: string) {
  //In case we cannot connect to supabase
  if (!supabase) {
    return (
      mockData.articles.find((a) => a.category === topic)?.text ?? undefined
    );
  }

  return supabase
    .from("Articles")
    .select("text")
    .filter("category", "eq", topic)
    .then((res) => {
      if (res.error) {
        console.log(res.error);
        return undefined;
      }
      return res.data?.[0].text ?? undefined;
    });
}
