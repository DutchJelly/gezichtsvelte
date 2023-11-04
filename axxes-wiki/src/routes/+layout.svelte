<script lang="ts">
  import TopicsList from "../shared/components/TopicsList.svelte";
  import Header from "./Header.svelte";
  import "../shared/styles/reset.css";
  import "../shared/styles/globals.scss";
  import "../shared/styles/typography.scss";
  import type { load } from "./+layout";

  export let data: Awaited<ReturnType<typeof load>>;
</script>

<div class="app">
  <Header />
  <div class="content container">
    <aside>
      <TopicsList topics={data.topics} />
    </aside>
    <main>
      <slot />
    </main>
  </div>

  <footer>
    <p class="container typo">
      Visit <a href="https://www.axxes.com">www.axxes.com</a> to learn more about
      Axxes
    </p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    min-height: 100dvh;
    display: flex;
    flex-direction: row;
    gap: 4rem;
    padding-bottom: 4rem;
  }

  main {
    padding: 3rem 0;
    flex: 1;
    overflow-x: hidden;
    word-wrap: break-word;
  }

  aside {
    padding: 3rem 0;
    width: 15rem;
    position: sticky;
    top: 4.5rem;
    height: calc(100dvh - 6em);
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  footer {
    background-color: var(--muted);
    padding: 1rem;
    text-align: left;
  }
</style>
