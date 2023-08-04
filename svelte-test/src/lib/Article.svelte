<script lang="ts">
  import { Editor } from "typewriter-editor";
  import Root from "typewriter-editor/lib/Root.svelte";
  import Toolbar from "typewriter-editor/lib/Toolbar.svelte";

  const editor = ((window as any).editor = new Editor());

  console.log(editor);
</script>

<article class="flex-1">
  <Toolbar {editor} let:active let:commands>
    <div class="flex flex-row absolute right-4">
      <button
        class="rounded-none"
        class:active={active.header === 2}
        on:click={commands.header2}>h2</button
      >

      <button
        class="rounded-none header3"
        class:active={active.header === 3}
        on:click={commands.header3}>h3</button
      >

      <button
        class="rounded-none"
        class:active={active.bold}
        on:click={commands.bold}>b</button
      >

      <button
        class="rounded-none"
        class:active={active.italic}
        on:click={commands.italic}>i</button
      >

      <button
        class="rounded-none"
        disabled={!active.undo}
        on:click={commands.undo}>undo</button
      >

      <button
        class="rounded-none"
        disabled={!active.redo}
        on:click={commands.redo}>redo</button
      >
    </div>
  </Toolbar>
  <div class="bg-white bg-opacity-10 p-4">
    <h1 class="pb-2 mb-8 border-b border-solid border-white">Angular</h1>

    <Root {editor} class="prose-lg prose-invert rounded">
      <h2>Typewriter</h2>
      <p>Hello world</p>
    </Root>
  </div>
</article>
