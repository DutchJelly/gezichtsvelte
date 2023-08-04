<script lang="ts">
  import { supabase } from "../services/supabase";

  const subjects: string[] = ["Angular", "React"];

  let searchValue: string = undefined;

  $: filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(searchValue?.toLowerCase() ?? "")
  );
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
        class="list-none p-2 underline cursor-pointer hover:bg-white hover:bg-opacity-10"
      >
        {subject}
      </li>
    {/each}
  </ul>
  {#if !filteredSubjects.length}
    This category does not exist.
    <button>Create article for<br /><u>{searchValue}</u></button>
  {/if}
</div>
