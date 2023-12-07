<script lang="ts">
  let loggedIn: boolean = false;

  function login(): void {
    loggedIn = !loggedIn;
  }
</script>

{#if loggedIn}
  <button class="btn outline" on:click={login}>Logout</button>
{:else}
  <button class="btn outline" on:click={login}>Login</button>
{/if}
