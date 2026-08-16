# KinetiX Sport (kinetek-najam.hr)

Repo je samostalan. Deploy ide na GitHub Pages iz grane `main`, CNAME je `kinetek-najam.hr`.

## Brand kartica

| | |
|---|---|
| Domena | `kinetek-najam.hr` |
| Brend | KinetiX Sport |
| Uloga u mreži | Sportski intent: ACL, meniskus, povratak treningu, sportaši. |
| Cijena | 18 EUR/dan |
| Telefon | 097 609 3203 |
| Mail | info@kinetek-najam.hr |
| Stranica | 41 |
| Gradskih stranica | 12 |

**Stanje na 15.08.2026:** Jedina domena koja pada na internom preklapanju: 11 parova iznad 30%, najgori osijek vs split 52.1%.

## Tvrda pravila

1. **Nikad ne spominji druge domene mreže** ni u tekstu, ni u linkovima, ni u mailovima.
   Svaka domena je zaseban brend s vlastitim telefonom i mailom.
2. **Nijedan odlomak se ne dijeli s drugom domenom.** Ista lokacija se piše iz intenta
   ovog brenda, ne copy-paste s druge domene. Prag: Jaccard ispod 15%.
3. **Interno preklapanje gradskih stranica ispod 30%.** Template blizanci sa zamijenjenim
   imenom grada su doorway pattern i Google ih hvata unutar jednog hosta.
4. **Svaka gradska stranica iznad 800 riječi stvarnog teksta.** Ako preklapanje treba
   smanjiti, PROŠIRI tekst, ne skraćuj ga.
5. **Nikad izmišljen review markup.** Bez `aggregateRating` i `Review` u schemi dok ne
   postoje stvarne recenzije. To je već jednom čišćeno s cijele mreže.
6. **Cijena mora biti ista na svim stranicama ovog repoa.** Provjeri prije commita.
7. **Ne mijenjaj title stranice koja rangira** bez GSC podataka o tome za što rangira.
   Meta description je siguran (nije ranking faktor), title nije.

## Prije commita

- [ ] cijena konzistentna kroz cijeli repo
- [ ] meta description 120 do 170 znakova, bez duplikata unutar repoa
- [ ] title 30 do 65 znakova
- [ ] 1 H1 po stranici
- [ ] telefon klikabilan (`href="tel:"`) na svakoj stranici
- [ ] nema `aggregateRating` ni `Review` u JSON-LD

## Što NIJE u ovom repou

Mrežna razina živi u `../Kinetek-hr`: planovi (`docs/plans/`), `scripts/footprint-check.py`
(mjeri cross-domain, treba mu pristup svim repoima) i sadržaj za Squarespace flagship.
Taj monorepo ima **zastarjele submodul pointere**, pa ga ne koristi kao izvor stanja koda.
Izvor istine za kod je ovaj repo.
