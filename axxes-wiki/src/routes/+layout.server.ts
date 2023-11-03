import { getTopics } from "../shared/services/getTopics";

export async function load() {
  return {
    topics: await getTopics().then(
      (res) => res?.data?.flatMap((x) => x.category) ?? []
    ),
  };
}
