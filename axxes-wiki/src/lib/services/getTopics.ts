import { mockData } from "./mockDatabase";
import { supabase } from "./supabase";

export async function getTopics() {
  //In case we cannot connect to supabase
  if (!supabase) {
    return mockData.articles.map((article) => article.category);
  }

  return supabase
    .from("Articles")
    .select("category")
    .then((res) => {
      if (res.error) {
        console.log(res.error);
        return undefined;
      }
      return res.data?.map((article) => article.category);
    });
}
