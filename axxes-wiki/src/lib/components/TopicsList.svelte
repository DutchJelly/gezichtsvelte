<script lang="ts">
  import NewTopicForm from "$lib/components/NewTopicForm.svelte";

  export let topics: string[] = [];
  let searchInput: string = "";

  function filterTopics(filter: string) {
    return topics.filter((topic) =>
      topic.toLowerCase().includes(filter?.toLowerCase())
    );
  }

  function isValidTopic(topic: string | undefined) {
    topic = topic?.trim()?.toLowerCase() ?? "";
    return !topics.find((x) => x.toLowerCase() === topic) && topic.length > 0;
  }

  //We use client side filtering for now. Production apps should use server side filtering.
  $: filteredTopics = filterTopics(searchInput);
</script>

<div>
  <h4 class="typo">Create new topic</h4>
  <NewTopicForm {isValidTopic} />
  <h4 class="typo">Topics</h4>
  <input
    class="search"
    type="search"
    bind:value={searchInput}
    placeholder="Show all (click to filter)"
  />
  <ul>
    {#each filteredTopics as topic}
      <li>
        <a href={"/article/" + topic}>{topic}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    /* border-width: 1px; */
    /* border-style: solid; */
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  input.search {
    font-size: 1rem;
    border-bottom: 1px solid var(--border);
  }

  h4.typo {
    color: var(--foreground);
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 0;
  }

  a {
    color: var(--secondary);
    padding: 0.1rem;
  }

  a:hover {
    color: var(--foreground);
    cursor: pointer;
    text-decoration: underline;
  }
</style>
