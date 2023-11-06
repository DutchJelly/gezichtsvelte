import { getArticle } from "$lib/services/getArticle";

export async function load({ params }: { params: { topic: string } }) {
  return {
    topic: params.topic,
    article: await getArticle(params.topic),
  };
}
