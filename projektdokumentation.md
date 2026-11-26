# Projektdokumentation

**Navn:**  Frederik Hansen

**Hold:** WU16

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Tekniske Skole

   ----------> [Hjemmeside her!] <----------


## Teknologier

-   HTML
-   Sass (SCSS)
-   JavaScript
-   React
-   React Router
-   Vite
-   Git og GitHub
-   Netlify
-   New York Times API (Top Stories og Most Popular)

---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

Projektet er sat op med Vites React-skabelon (`npm create vite@latest`). Ud over det har jeg installeret disse pakker:

-   **react** og **react-dom**: Kom med skabelonen. React bruger jeg til at dele siden op i komponenter og holde styr på state.
-   **vite** og **@vitejs/plugin-react**: Kom også med skabelonen. Vite starter en udviklingsserver, mens jeg arbejder. Når jeg kører `npm run build`, samler den projektet i en `dist`-mappe, hvor mine Sass-filer er lavet om til én CSS-fil og min JavaScript er samlet i én fil. Det er den automatisering, opgaven beder om.
-   **sass**: Gør, at Vite kan forstå `.scss`-filer. Uden den kan jeg ikke bruge nesting, partials og `@use`.
-   **react-router-dom**: Bruges til at skifte mellem siderne Home, Archive, Popular og Settings, uden at hele siden bliver genindlæst.
-   **react-icons**: Giver mig ikonerne fra designet (Feather Icons) som React-komponenter, fx huset, bogmærket, stjernen, tandhjulet, pilene og skraldespanden.

Andre ting, jeg henter udefra:

-   Nyhederne kommer fra New York Times' **Top Stories API** og **Most Popular API**.
-   Skrifttyperne Playfair Display og Open Sans kommer fra **Google Fonts**.

Jeg har brugt Claude (AI) som hjælp undervejs. Den har forklaret ting, jeg ikke kendte i forvejen, givet kodeeksempler og hjulpet mig med at finde fejl. Det meste af koden har jeg selv skrevet ind ud fra dens eksempler.

---

### Argumentation for de valg jeg selvstændigt har truffet under løsningen af opgaven

**Komponenter**

Jeg har delt appen op i små komponenter, så hver fil kun har én opgave: `Header`, `Navigation`, `Category`, `Article` og `CategorySwitch`, og så én komponent til hver side. `App.jsx` viser kun komponenterne og bestemmer, hvilken side der bliver vist. Listen med kategorier ligger i `src/data/categories.js`, så jeg kun skal rette den ét sted, hvis jeg vil tilføje en ny kategori.

**Sass og modularisering**

Hver komponent har sin egen Sass-fil (en partial med `_` foran navnet) i mappen `styles/components`, og `main.scss` samler dem med `@use`. Jeg bruger BEM til klassenavnene, fx `.category__header` og `.switch--on`, så man kan se, hvilken komponent en klasse hører til.

Alle farver, der bliver brugt mere end én gang, ligger som CSS-variabler i `_variables.scss`. Jeg valgte CSS-variabler frem for Sass-variabler, fordi Sass-variabler bliver lavet om til faste farver, når projektet bliver bygget. CSS-variabler kan skifte, mens appen kører, og det skal de kunne, for at mørkt tema virker.

**Animationer**

Når en kategori åbnes eller lukkes, glider artiklerne ned og op med en `transition` på `max-height`, og pilen drejer 90 grader, så den peger nedad. Jeg valgte `max-height`, fordi elementet skal være der hele tiden for at kunne animeres. Derfor skifter jeg en klasse i stedet for at fjerne artiklerne. Animationen tager 0,4 sekunder, så den føles blød, uden at man skal vente på den.

Kontakterne i Settings har en hvid knop, der glider fra venstre mod højre med `translateX`, mens baggrunden skifter fra grå til grøn. De ligner de kontakter, man kender fra indstillingerne på en telefon, så man med det samme kan se, hvad de gør.

**Swipe**

Swipe er lavet med touch events (`onTouchStart` og `onTouchEnd`). Jeg måler, hvor langt fingeren har flyttet sig, og artiklen glider først til side, når det er mere end 50px til venstre. Så sker der ikke noget, hvis man bare kommer til at røre skærmen lidt skævt. Swiper man til højre, glider den tilbage igen.

**Hentning af nyheder**

NYT tillader kun 5 forespørgsler i minuttet. Derfor henter jeg kun nyhederne til en kategori første gang, den bliver åbnet, i stedet for at hente alle kategorier, når siden starter. Jeg viser højst 5 nyheder pr. kategori. Jeg bruger NYT's lille thumbnail i stedet for det store billede, fordi det store fik siden til at hakke.

API-nøglen ligger i en `.env.local`-fil, som git ignorerer, så den ikke kommer med op på GitHub.

**Gemte indstillinger og arkiv**

Indstillingerne (hvilke kategorier der er slået til, og hvilket tema man bruger) og arkivet bliver gemt i localStorage, så appen husker dem, når man kommer tilbage. Arkivet er en liste af artikler, så den bliver lavet om til tekst med `JSON.stringify`, før den gemmes, og tilbage til en liste med `JSON.parse`, når den hentes. Før en artikel bliver gemt, tjekker jeg på dens url, om den allerede ligger i arkivet, så den ikke kommer med to gange.

---

### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Jeg har arbejdet i små bidder, hvor jeg lavede én ting færdig ad gangen, testede den og lavede et commit på min `dev-branch` bagefter. Det gjorde det nemmere at finde fejl, fordi jeg vidste, at fejlen lå i det, jeg lige havde lavet.

Det gik godt at få de obligatoriske funktioner til at virke: kategorier, der kan åbnes og lukkes med animation, swipe for at gemme og slette artikler, Settings med kontakter, mørkt tema, og at appen husker indstillingerne.

De fleste af mine fejl var små ting. Jeg skrev fx `Fihome` i stedet for `FiHome` og `Navlink` i stedet for `NavLink`, glemte `export default` eller `./` i en import, eller havde ikke gemt filen. Én fejl var ikke min egen: NYT sendte ingen sports-nyheder (`results` var `null`), og det fik koden til at gå ned. Det løste jeg ved at tjekke, om der er nogen nyheder.

Jeg mangler stadig at lægge appen på Netlify og teste den på min telefon. Indtil videre har jeg testet i browserens mobilvisning. Søgefeltet i toppen er med, fordi det er i designet, men det virker ikke endnu. Nice-to-have-opgaverne (swipe-down to refresh, onboarding og at ændre rækkefølgen på kategorierne) har jeg ikke nået.

---

### En beskrivelse af særlige punkter til bedømmelse

Mørkt tema er lavet med CSS-variabler, der er samlet i én fil. Når man trykker på knappen i Settings, får `body` klassen `dark`, og så skifter alle farverne på én gang:

```css
body {
	--background: white;
	--text: #222;
	--line: #ddd;
}

body.dark {
	--background: #1e1e1e;
	--text: #eee;
	--line: #444;
}
```

Swipe er lavet uden et færdigt bibliotek, kun med Reacts touch events:

```js
function handleTouchEnd(event) {
	const endX = event.changedTouches[0].clientX

	if (startX - endX > 50) {
		setIsSwiped(true)
	}
	if (endX - startX > 50) {
		setIsSwiped(false)
	}
}
```
