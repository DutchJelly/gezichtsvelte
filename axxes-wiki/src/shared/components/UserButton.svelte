<script>
  import { user } from "../store/user";
  import { signin, signout } from "../services/authentication";
</script>

{#if $user}
  <button class="btn outline" on:click={signout}>Logout</button>
{:else}
  <button class="btn outline" on:click={signin}>Login</button>
{/if}
