<script lang="ts">
  import { signin, signout } from "../services/user";
  import { user } from "../store";
</script>

<div class="flex flex-row justify-between p-4">
  <h2 class="text-xl">Axxes wiki</h2>
  {#if $user}
    <div class="flex flex-row gap-4 items-center">
      <span>Hi, {$user.user_metadata.full_name}</span>
      <button on:click={() => signout()}>Logout</button>
    </div>
  {:else}
    <button on:click={() => signin()}>Login</button>
  {/if}
</div>
