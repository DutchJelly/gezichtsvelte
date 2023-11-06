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
      <!-- TODO: add logic to switch between rendered and source views -->
      <button class="btn outline"> view rendered</button>

      <!-- TODO: conditionally render the right buttons/anchor tags -->

      <!-- TODO: add remove draft logic -->
      <button class="btn outline">delete draft</button>
      <!-- TODO: Add edit draft functionality -->
      <a class="btn primary">edit draft</a>
      <!-- TODO: Add edit functionality -->
      <a class="btn primary">edit</a>
    </div>
  </div>
  <section class="typo">
    <!-- TODO: render either 
      * the raw markdown/noContent message 
      * the markdown with <SvelteMarkdown />
      ...depending on sourceView
    -->
    <pre>NOT IMPLEMENTED</pre>
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
