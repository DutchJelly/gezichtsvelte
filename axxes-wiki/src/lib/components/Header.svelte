<script>
    import { page } from "$app/stores";
    import logo from "$lib/images/axxes-wiki-logo.png";
    import UserButton from "$lib/components/UserButton.svelte";
</script>

<header>
    <div class="container">
        <div class="logo">
            <a href="/">
                <img src={logo} alt="SvelteKit" />
                <span>WiXXi_</span>
            </a>
        </div>

        <nav>
            <ul>
                <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                    <a class="btn ghost" href="/">Home</a>
                </li>
            </ul>
        </nav>

        <UserButton />
    </div>
</header>

<style>
    header {
        z-index: 50;
        position: sticky;
        top: 0;
        background-color: var(--background);
    }

    .container {
        display: flex;
    }

    .logo {
        height: 3em;
    }

    .logo a {
        display: flex;
        align-items: center;
        gap: 0.5em;
        height: 100%;
        color: black;
        font-size: x-large;
        font-weight: 500;
        text-decoration: none;
    }

    .logo img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
    }

    nav {
        text-transform: uppercase;
        font-size: 0.75rem;
        flex: 1;
        margin-right: 1.5em;
        padding: 0 1.5em;
        border-right: 1px solid var(--foreground);
    }

    nav ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-left: auto;
        padding: 0;
        gap: 0.25rem;
        list-style-type: none;
    }
</style>
