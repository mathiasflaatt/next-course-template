This is a boostrap project for course with AKVA-Group

# Installation

`npx create-next-app -e https://github.com/mathiasflaatt/next-course-template`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about React, Next.js, OpenLibrary, or Dexie take a look at the following resources:

- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html) - The most important rules when using hooks

- [React hooks API](https://reactjs.org/docs/hooks-reference.html) - API refrence for hooks

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [OpenLibrary api](https://openlibrary.org/developers/api) - Documentation of the Open Library API.

- [Dexie API refrence](https://dexie.org/docs/API-Reference) - API refrence for Dexie our IndexedDB wrapper of choice.

## Questions

Tweet your question to [@mikaelbrevik](https://twitter.com/intent/tweet?screen_name=mikaelbrevik)

---

## Case text

## Case 1.0 - Custom hooks (20min)

> Som en utvikler ønsker jeg å få egne hooks som tar seg av komplekse operasjoner slik at jeg kan lettere jobbe med visningslogikk.

- Lag en egen hook som tar i mot en async funksjon,
  og returnerer resultatet, state og error

```tsx
const { data, state, error } = useAsync(asyncFn);

// or

const [data, state, error] = useAsync(asyncFn);
```

---

## Case 1.1 - Custom hooks (20min)

- Lag en hook som håndterer all logikken til
  fetch

Eksempel

```tsx
const { data, state, error } = useFetch("https://example.com", {
  method: "GET",
});
```

---

## Case 1.2 - Custom hooks (20 min)

- Lag en hook som håndtere debouncing logikk for state.

```tsx
const debouncedData = useDebounce(rapidlyChangingValue, 500);
```

---

## Case - 2.0 (2x 45min)

Libero Nacho

> Som en leseentusiast ønsker jeg å kunne søke etter bøker på titler og forfattere, og få en liste over relevante resultater.

- Lag et søkefelt som trigger fetch mot Open Library sitt api.
- Endepunkt til spørring `/api/search?q=${query}`
- Vis feedback for alle typer states
- Implementer paging
- Lag sortering på listen, på "title" og "author"
- Gjør listen universelt utformet, i.e navigering av elementer og skjermleser.

---

## Case - 2.1 (45 min)

> Som en leseentusiast ønsker jeg å kunne se mer informasjon om boken og forfatteren fra listen slik at jeg kan se mer om boken.

- Lag en infokomponent som henter data når brukeren trykker på elementet i listen
  - `/api/books?bibkeys=OLID:${OLID}`
- Hent og vis informasjon om forfatteren for boken.
  - `/api/authors/${OLID}`
- Hent bilder av forfatteren, og list frem alle bildene av bøkene

---

## Case - 2.2 (2 x 45 min)

> Som en lesehest, ønsker jeg å kunne lagre mine funn i en lese/favoritt-liste, slik at jeg kan slippe å søke på disse igjen.

- Lag en Context som lar oss vise alle favoritter, legge til ny favoritt og fjerne eksisterende.
- Implementer context i listevisingen fra 2.0 og gjør det mulig å legge inn nye favoritter.
- Lag en komponent som lister ut alle favoritter (gjennbruk fra 2.0?).
- La brukeren kunne legge til i fravoritter fra bokinfokomponenten

---

## Case - 3.0 (45 min)

Favoritter bør eksistere en annen plass en InMemory, la oss prøve indexedDB!

Vi bruker dexie som wrapper for å gjøre livet lettere.

- Bruk class wrapper som ligger i `cheats/db/typedDatabase.ts` for å få typing.
- Endre favorittContext til å benytte seg av databasewrapperen.
- Hent favoritter fra databasen ved mount, lag funksjon for add og remove.
