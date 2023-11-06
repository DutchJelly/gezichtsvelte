<script lang="ts">
  import { onMount } from "svelte";
  import type { load } from "./+page";
  import SvelteMarkdown from "svelte-markdown";
  import { getDraft, removeDraft, saveDraft } from "$lib/services/drafts";
  import { saveArticle } from "$lib/services/saveArticle";
  import { goto } from "$app/navigation";

  export let data: Awaited<ReturnType<typeof load>>;

  let sourceView: boolean = true;

  const noContent = `
  # No content
  
  You have not filled in any content yet.
  `;

  let article: string | undefined = undefined;
  let mounted = false;

  onMount(() => {
    mounted = true;
  });

  $: {
    mounted && (article = getDraft(data.topic) ?? data.article ?? undefined);
  }

  // TODO save draft on change and on mount
  // TODO keep track of line breaks

  async function handlePublish() {
    if (!article?.trim()) return;
    const succes = await saveArticle(data.topic, article);

    if (!succes) {
      alert("Something went wrong while publishing the article.");
      return;
    }
    removeDraft(data.topic);
    goto(`/article/${data.topic}`);
  }

  function handleDelete() {
    removeDraft(data.topic);
    goto(`/article/${data.topic}`);
  }
</script>

<div>
  <div class="articleheader">
    <div class="topic">
      Topic {">"}
      {data.topic}
      {">"} draft
    </div>
    <div>
      <!-- TODO Implement switching between source view and rendered view -->
      <button class="btn outline">View rendered</button>
      <!-- TODO Implement deleting the draft -->
      <button class="btn primary">delete draft</button>
      <!-- TODO Implement publishing the draft -->
      <button class="btn primary">publish draft</button>
    </div>
  </div>
  <section class="typo">
    <!-- TODO Make this textarea a controlled input for 'article' with enough rows to contain article -->
    <!-- TODO Conditionally show rendered markdown -->
  </section>
</div>

<style>
  .articleheader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
  }
  .topic {
    border-bottom-style: solid;
    border-bottom-width: 2px;
  }

  textarea {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    background-color: var(--muted);
    padding: 0.5rem;
    font-size: 1rem;
  }
</style>
