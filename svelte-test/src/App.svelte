<script lang="ts">
  import Navigation from "./lib/Navigation.svelte";
  import Subjects from "./lib/Subjects.svelte";
  import Article from "./lib/Article.svelte";
</script>

<main>
  <Navigation />
  <div class="flex flex-row gap-8 w-full p-4">
    <Subjects />
    <Article />
  </div>
</main>

<style>
</style>
