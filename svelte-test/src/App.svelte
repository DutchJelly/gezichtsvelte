<script lang="ts">
  import Navigation from "./lib/Navigation.svelte";
  import Subjects from "./lib/Subjects.svelte";
  import Article from "./lib/Article.svelte";
  import { articles } from "./store";

  let selectedSubject: string = undefined;

  $: article = $articles.find((x) => x.category === selectedSubject)
    ?.text as string;
  $: subjects = $articles?.map((a) => a.category);
</script>

<main>
  <Navigation />
  <div class="flex flex-row gap-8 w-full p-4">
    <Subjects
      on:select={(e) => (selectedSubject = e.detail)}
      {subjects}
      current={selectedSubject}
    />
    <Article {article} />
  </div>
</main>

<style>
</style>
