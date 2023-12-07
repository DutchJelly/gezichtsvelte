<script lang="ts">
  import { goto } from "$app/navigation";
  import { scale } from "svelte/transition";
  export let isValidTopic: (topic: string) => boolean;

  let value: string = "";

  $: isValid = !value || isValidTopic(value);
</script>

<div class:invalid={!isValid}>
  <input
    type="search"
    bind:value
    placeholder="Enter a topic name"
    name="topic-input"
  />
  <label
    class="invalid-label"
    style:visibility={isValid ? "hidden" : "visible"}
    for="topic-input">Invalid topic name</label
  >
  {#if isValid && value?.length}
    <button
      class="btn primary"
      on:click={() => console.log('TODO navigate')}
      transition:scale={{ duration: 100 }}>Create</button
    >
  {/if}
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    width: 100%;
    height: 2.5rem;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    background-color: var(--muted);
    padding: 0.5rem;
    font-size: 1rem;
  }

  input::placeholder {
    color: gray;
    font-weight: 300;
  }

  .invalid-label {
    color: red;
    font-size: 0.75rem;
    font-weight: 300;
  }

  .invalid input {
    border-color: red;
  }
</style>
