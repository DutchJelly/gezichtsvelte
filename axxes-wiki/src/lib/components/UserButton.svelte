<script lang="ts">
    let loggedIn: boolean = false;

    function login(): void {
        loggedIn = !loggedIn;
    }
</script>

<!-- TODO implement click event -->
{#if loggedIn}
    <button class="btn outline">Logout</button>
{:else}
    <button class="btn outline">Login</button>
{/if}
