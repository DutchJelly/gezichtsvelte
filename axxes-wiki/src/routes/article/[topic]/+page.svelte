<script lang="ts">
  import { onMount } from "svelte";
  import { getDraft, removeDraft } from "$lib/services/drafts";
  import type { load } from "./+page";
  import SvelteMarkdown from "svelte-markdown";
  export let data: Awaited<ReturnType<typeof load>>;

  let sourceView: boolean = false;

  const noContent = `
  # No content
  
  No one filled in any information about this topic.
  `;

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  $: hasDraft = mounted && Boolean(getDraft(data.topic));
</script>

<div>
  <div class="articleheader">
    <div class="topic">
      Topic {">"}
      {data.topic}
    </div>
    <div>
      <button class="btn outline" on:click={() => (sourceView = !sourceView)}>
        {sourceView ? "view rendered" : "view source"}</button
      >
      {#if hasDraft}
        <button class="btn outline" on:click={() => removeDraft(data.topic)}
          >delete draft</button
        >
        <a
          href={"/edit/" + data.topic}
          on:click={() => removeDraft(data.topic)}
          class="btn primary">edit draft</a
        >
      {:else}
        <a
          href={"/edit/" + data.topic}
          on:click={() => removeDraft(data.topic)}
          class="btn primary">edit</a
        >
      {/if}
    </div>
  </div>
  <section class="typo">
    {#if sourceView}
      <pre>
        {data.article ?? noContent}
      </pre>
    {:else}
      <SvelteMarkdown source={data.article ?? noContent} />
    {/if}
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
</style>
