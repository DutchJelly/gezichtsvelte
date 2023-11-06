<script>
  import { user } from "$lib/store/user";
  import { signin, signout } from "$lib/services/authentication";
</script>

{#if $user}
  <button class="btn outline" on:click={signout}>Logout</button>
{:else}
  <button class="btn outline" on:click={signin}>Login</button>
{/if}
