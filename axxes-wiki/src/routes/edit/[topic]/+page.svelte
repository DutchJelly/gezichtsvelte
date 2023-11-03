<script lang="ts">
  import { onMount } from "svelte";
  import type { load } from "./+page";
  import SvelteMarkdown from "svelte-markdown";
  import {
    getDraft,
    removeDraft,
    saveDraft,
  } from "../../../shared/services/getDrafts";
  import { saveArticle } from "../../../shared/services/saveArticle";
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
    console.log("get new article");
    article = getDraft(data.topic) ?? data.article ?? undefined;
    mounted = true;
  });

  $: mounted && saveDraft(data.topic, article ?? "");
  $: lineBreaks = article?.match(/\n/g)?.length ?? 0;

  async function handlePublish() {
    if (!article?.trim()) return;
    const { error } = await saveArticle(data.topic, article);

    if (error) {
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
      <button class="btn outline" on:click={() => (sourceView = !sourceView)}>
        {sourceView ? "view rendered" : "view source"}</button
      >
      <button class="btn primary" on:click={handleDelete}>delete draft</button>
      <button class="btn primary" on:click={handlePublish}>publish draft</button
      >
    </div>
  </div>
  {#key data.topic}
    <section class="typo">
      {#if sourceView}
        <textarea rows={lineBreaks + 1} bind:value={article} />
      {:else}
        <SvelteMarkdown source={!!article ? article : noContent} />
      {/if}
    </section>
  {/key}
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
