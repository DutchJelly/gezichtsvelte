import { getArticle } from "../../../shared/services/getArticle";

export async function load({ params }: { params: { topic: string } }) {
  return {
    topic: params.topic,
    article: await getArticle(params.topic).then(
      (res) => res.data?.flatMap((x) => x.text)?.[0]
    ),
  };
}