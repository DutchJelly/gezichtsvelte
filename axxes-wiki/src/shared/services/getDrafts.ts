//Warn: this runs on client-side only

export function getDraftTopics() {
  const drafts = localStorage.getItem("drafts");

  if (drafts) {
    return Object.keys(JSON.parse(drafts)) as string[];
  }
  return [];
}

export function getDraft(topic: string) {
  const drafts = localStorage.getItem("drafts");

  if (drafts) {
    return JSON.parse(drafts)[topic] as string;
  }
  return undefined;
}

export function saveDraft(topic: string, content: string) {
  const drafts = localStorage.getItem("drafts");

  if (drafts) {
    const parsed = JSON.parse(drafts);
    parsed[topic] = content;
    localStorage.setItem("drafts", JSON.stringify(parsed));
  } else {
    localStorage.setItem("drafts", JSON.stringify({ [topic]: content }));
  }
}

export function removeDraft(topic: string) {
  const drafts = localStorage.getItem("drafts");

  if (drafts) {
    const parsed = JSON.parse(drafts);
    delete parsed[topic];
    localStorage.setItem("drafts", JSON.stringify(parsed));
  }
}
