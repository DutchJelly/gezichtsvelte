# Excercise 2

Onderdelen die we aan gaan maken:

- `layout.svelte`
- `layout.ts`
- Add routing for topics and topic creation
- Article header buttons logic (article view page)
- Voeg editor toe aan `edit/[topic]/+page.svelte`
- Article header buttons logic (article edit page)
- (extra) Refactor de gedupliceerde 'load' code
- (extra) Prerendering
- (extra) Sla topics op in store en subscribe aan supabase realtime database

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

## Article header buttons logic (article view page)

![](article-view-buttons.png)
![](article-view-buttons-w-draft.png)

Boven de artikelen (in view modus) staan de volgende knoppen:

- Het switchen tussen de gerenderde en raw markdown view
- Het editen van een artikel.
  - Als de gebruiker al een draft heeft, staat er "edit draft"
  - Als de gebruiker nog geen draft heeft, staat er "edit"
- (optioneel) Het verwijderen van een draft als de gebruiker die nog heeft

## Voeg editor toe aan `edit/[topic]/+page.svelte`

![](editor.png)

Voeg een textarea toe die reageert op het aantal regels in de tekst en die de draft opslaat wanneer de tekst aangepast wordt. Deze moet ook getriggerd worden vanaf het moment dat de gebruiker het artikel in edit modus opent. Maak hiervoor voldoende gebruik van reactive statements.

## Article header buttons logic (article edit page)

![](article-edit-buttons.png)

Boven de artikelen (in edit modus) staan de volgende knoppen:

- Het switchen tussen de gerenderde en raw markdown view
- Het verwijderen van de draft (functie wordt later geïmplementeerd)
- Het publiceren van de draft (functie wordt later geïmplementeerd)

## (Optional) Refactor de gedupliceerde 'load' code

Tussen de artikel view en edit pagina's, bestaat er een stuk gedupliceerde load code. Deze zou kunnen worden gerefactord zodat beide pagina's data uit dezelfde load functie gebruiken. _#TeachTheTeachers_

## (Optional) Prerendering

Prerender alle pagina's behalve de artikelen, want die zijn dynamisch.
