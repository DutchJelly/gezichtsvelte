import { getTopics } from "$lib/services/getTopics";

export async function load() {
  return {
    topics: await getTopics(),
  };
}
