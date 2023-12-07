# Excercise 1

Onderdelen die we aan gaan maken:

- `Header.svelte`
- `UserButton.svelte`

## Header.svelte

![](header.png)

De header bevat een simpele navigatie, en user login/logout knop. Deze user login/logout gaan we pas later maken, dat is de UserButton.svelte.

Maak een header bar met een logo dat terug navigeert naar de home page, de naam van onze app aan de linkerkant en een stuk navigatie aan de rechterkant. Je kan hiervoor de css hieronder gebruiken. De individuele links in de navigatie kan je de class `btn ghost` geven. De login/logout button wordt later toegevoegd, deze moeten jullie eerst nog maken. Het logo kunnen jullie importeren via `$lib/images/axxes-wiki-logo.png`.

```ts
import logo from "$lib/images/axxes-wiki-logo.png";
```

```css
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
```

## UserButton.svelte

![](userbutton.png)

Implementeer de click event op de login en logout button zodat deze de login function aanroepen en zo de juiste button wordt getoond.
