<script>
  import NewTopicInput from "./NewTopicInput.svelte";

  let topics = ["React", "Vue"];
</script>

<div>
  <h4 class="typo">Create new topic</h4>
  <NewTopicInput />
  <h4 class="typo">Topics</h4>
  <input
    class="search"
    type="search"
    placeholder="Show all (click to filter)"
  />
  <ul>
    {#each topics as topic}
      <li>
        <a>{topic}</a>
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
