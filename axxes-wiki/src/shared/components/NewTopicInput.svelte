<script lang="ts">
  let value: string = "";
</script>

<input type="search" bind:value placeholder="Enter a topic name" />

<style>
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
</style>
