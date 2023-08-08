<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { supabase } from "../services/supabase";
  import { articles } from "../store";

  export let current: string = undefined;

  let searchValue: string = undefined;
  const dispatch = createEventDispatcher();

  $: filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(searchValue?.toLowerCase() ?? "")
  );
  $: trimmedSearchValue = searchValue?.replace(/[^a-z^A-Z^0-9]+/g, " ").trim();
  $: subjects = $articles?.map((a) => a.category);

  async function handleSubjectAdd() {
    await supabase
      .from("Articles")
      .upsert({
        category: trimmedSearchValue,
      })
      .select();
    searchValue = undefined;
  }
</script>

<div class="flex flex-col gap-2">
  <div class="flex flex-row gap-1.5">
    <input
      class="p-4"
      type="search"
      placeholder="Search for a category"
      bind:value={searchValue}
    />
  </div>

  <ul class="flex flex-col">
    {#each filteredSubjects as subject}
      <li
        on:keydown
        on:click={() => dispatch("select", subject)}
        class="list-none p-2 hover:underline cursor-pointer hover:bg-white hover:bg-opacity-10"
      >
        {subject}
        {subject === current ? "(selected)" : ""}
      </li>
    {/each}
  </ul>
  {#if !filteredSubjects.length}
    This category does not exist.
    <button on:click={handleSubjectAdd}
      >Create article for<br /><u>{trimmedSearchValue}</u></button
    >
  {/if}
</div>
