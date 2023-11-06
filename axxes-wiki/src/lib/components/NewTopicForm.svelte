<script lang="ts">
  export let isValidTopic: (topic: string) => boolean;

  //TODO create reactive variable for form validation
</script>

<!-- (optional) TODO add conditional invalid class -->
<div>
  <!-- TODO make this input controlled -->
  <input type="search" placeholder="Enter a topic name" name="topic-input" />
  <!-- TODO conditionally render this label when input is invalid -->
  <label class="invalid-label" for="topic-input">Invalid topic name</label>
  <!-- TODO 
    * conditionally render this button when input is valid 
    * show a console log when clicked
    * (optional) add transition
  -->
  <button class="btn primary">Create</button>
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
