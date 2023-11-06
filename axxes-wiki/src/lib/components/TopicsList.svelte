<script lang="ts">
  //TODO add exported prop for topics
  //TODO add reactive variable(s) for filter logic

  // function filterTopics(filter: string) {
  //   return topics.filter((topic) =>
  //     topic.toLowerCase().includes(filter?.toLowerCase())
  //   );
  // }

  // function isValidTopic(topic: string | undefined) {
  //   topic = topic?.trim()?.toLowerCase() ?? "";
  //   return !topics.find((x) => x.toLowerCase() === topic) && topic.length > 0;
  // }
</script>

<div>
  <h4 class="typo">Create new topic</h4>
  <!-- TODO add new topic form -->
  <h4 class="typo">Topics</h4>
  <!-- TODO add reactivity -->
  <input
    class="search"
    type="search"
    placeholder="Show all (click to filter)"
  />
  <ul>
    <!-- TODO add topics list -->
  </ul>
</div>

<style>
  div {
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
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
