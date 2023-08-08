import { writable } from "svelte/store";
import { supabase, type Article } from "./services/supabase";
import type { User } from "@supabase/supabase-js";

export const user = writable<User | undefined>();
export const articles = writable<Article[]>([]);

articles.subscribe((articles) => {
  console.log("from store", articles);
});

supabase.auth.onAuthStateChange((e, session) => {
  user.set(session?.user);
});

supabase
  .from("Articles")
  .select("*")
  .then(({ data, error }) => {
    if (!error) articles.set(data);
  });

supabase
  .channel("custom-all-channel")
  .on(
    "postgres_changes",
    { event: "*", schema: "public", table: "Articles" },
    (payload) => {
      const changedArticle = payload.new as Article;

      articles.update((oldArticles) => {
        const existingArticle = oldArticles.find(
          (article) => article.id === changedArticle.id
        );

        if (!existingArticle) oldArticles.push(payload.new as Article);
        else Object.assign(existingArticle, changedArticle);

        return oldArticles;
      });
    }
  )
  .subscribe();
