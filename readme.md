# Excercise 3

Onderdelen die we aan gaan maken:

- `layout.svelte`
- `layout.ts`
- Add routing for topics and topic creation

## Layout.svelte

![](layout.png)

Maak een `+layout.svelte` die de header, topicsList, footer en een `<slot />` voor de content bevat. Hierdoor blijft er enkel nog de homepage text over in de `+page.svelte`.

## layout(.server).ts

Exporteer een load functie die de topics ophaalt uit de `getTopics` service zodat je deze kunt gebruiken in je `+layout.svelte` component.

Voeg een data prop toe aan de `+layout.svelte` als volgt om ervoor te zorgen dat het datatype automatisch uit de `layout.(server.)ts` wordt gehaald:

```ts
export let data: Awaited<ReturnType<typeof load>>;
```

## Voeg routing toe naar `article/[topic]`

Voeg anchor tags toe met de correcte href om te navigeren naar de juiste pagina. Ook bij het aanmaken van een nieuw topic moet er vanuit de ts code genavigeerd worden naar de edit pagina.