<script lang="ts">
  import Reveal from "reveal.js";
  import { onMount, tick } from "svelte";

  import Title from "./slides/title.slide.svelte";

  onMount(async () => {
    await tick();
    const deck = new Reveal();
    deck.initialize();
  });
</script>

<main class="reveal">
  <div class="slides">
    <Title />
  </div>
</main>

<style>
</style>
