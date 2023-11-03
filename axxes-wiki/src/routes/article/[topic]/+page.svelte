<script lang="ts">
  import { removeDraft } from "../../../shared/services/getDrafts";
  import type { load } from "./+page.server";
  import SvelteMarkdown from "svelte-markdown";
  export let data: Awaited<ReturnType<typeof load>>;

  let sourceView: boolean = false;

  const noContent = `
  # No content
  
  No one filled in any information about this topic.
  `;
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
      <a
        href={"/edit/" + data.topic}
        on:click={() => removeDraft(data.topic)}
        class="btn primary">edit</a
      >
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
