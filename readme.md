# Excercise 1

Onderdelen die we aan gaan maken:

- `Header.svelte`
- `store/user.ts`
- `UserButton.svelte`
- `TopicsList.svelte`
- `NewTopicForm.svelte`

## Header.svelte

![](header.png)

De header bevat een simpele navigatie, en user login/logout knop. Deze user login/logout gaan we pas later maken, dat is de UserButton.svelte.

Maak een header bar met een logo dat terug navigeert naar de home page, de naam van onze app aan de linkerkant en een stuk navigatie aan de rechterkant. Je kan hiervoor de css hieronder gebruiken. De individuele links in de navigatie kan je de class `btn ghost` geven. De login/logout button wordt later toegevoegd, deze moeten jullie eerst nog maken. Het logo kunnen jullie importeren via `$lib/images/axxes-wiki-logo.png`.

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

## store/user.ts

Exporteer een `writable` in `src/lib/store/user.ts` die de meest recente user bijhoudt aan de hand van de `onUserChange` functie in de `authentication.ts` service.

## UserButton.svelte

![](userbutton.png)

Maak een component dat op basis van de user store een login of een logout knop toont en de juiste functie uitvoert `on:click`. Daarna kan je deze toevoegen aan de header component.

## TopicsList.svelte

![](topicslist.png)

Maak een component dat een prop `topics: string[]` verwacht en deze als lijst weergeeft.

Boven de lijst moet een search field komen, dat een reactive statement triggered die de lijst met topics filtert op basis van een zoekterm. Het toevoegen van een nieuwe topic volgt later.

## NewTopicForm.svelte

![](newtopicform.png)

Implementeer `NewTopicForm` zodat de gebruiker een naam kan ingeven voor een nieuw topic. Zodra er een geldige naam ingegeven wordt, wordt de knop weergegeven om deze toe te voegen. Indien de input niet geldig is, wordt er een waarschuwing getoond. Voor de validatie moet er echter gebruik gemaakt worden van het bovenliggende component om niet alle data door te moeten geven. Je kan hiervoor deze prop gebruiken: `export let isValidTopic: (topic: string) => boolean;`.

Je mag dit component gebruiken in de `TopicList`.
