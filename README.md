# Das Frittierwerk

**Offizielle Website** des Imbiss **Das Frittierwerk** an der Wurster Nordseeküste — Krosses Hähnchen, Pommes, Wurst, Fisch und mehr.

Die Seite wird als **statische Website** gebaut und über **GitHub Pages** gehostet. Texte und Daten lassen sich direkt in diesem Repository anpassen, **ohne Programmierkenntnisse**: Speisekarte und Kontakt über YAML-Dateien, Seiten wie „Über uns“ und „Qualität“ über Markdown.

---

## Was die Website bietet

- **Speisekarte** — Kategorien und Preise, pflegbar in einer YAML-Datei
- **Kontakt & Anfahrt** — Adresse, Öffnungszeiten, Telefon; Karte mit **OpenStreetMap** (OpenLayers)
- **Über uns / Qualität** — Inhalte in Markdown, einfach im Editor bearbeitbar
- **Galerie** — Bildergalerie, Bildliste per YAML konfigurierbar
- **Logo-Animation** — Zahnrad-Logo dreht sich beim Scrollen

Alles wird als **eine scrollbare Einzelseite** ausgeliefert, mit fester Navigation zu den Bereichen Speisekarte, Über uns, Qualität, Galerie und Kontakt.

---

## Deployment mit GitHub Pages

Die Seite wird automatisch bereitgestellt, sobald Änderungen auf den Branch **`main`** gepusht werden:

1. Repository auf GitHub anlegen bzw. nutzen (z. B. `ArtCodeStudio/das-frittier-werk`).
2. **GitHub Pages** aktivieren: *Settings → Pages → Source*: **GitHub Actions** wählen.
3. Bei jedem Push auf `main` baut der Workflow unter `.github/workflows/node-gh-pages.yml` das Projekt und deployt das Ergebnis nach GitHub Pages.

Es ist **kein separates Hosting** nötig — GitHub hostet die statische Seite kostenlos. Die URL ist typischerweise `https://<org>.github.io/das-frittier-werk/` (oder deine angepasste Custom Domain).

---

## Inhalte bearbeiten (ohne Code)

| Was ändern?      | Datei(en)                    | Format    |
|-----------------|------------------------------|----------|
| Speisekarte     | `src/content/menu.yml`       | YAML     |
| Kontakt, Karte | `src/content/contact.yml`    | YAML     |
| Galerie-Bilder | `src/content/gallery.yml`     | YAML     |
| Über uns       | `src/content/about.md`      | Markdown |
| Qualität       | `src/content/quality.md`    | Markdown |

Einfach die entsprechende Datei auf GitHub bearbeiten (*Edit*-Button), speichern und committen. Nach dem nächsten Deploy erscheinen die Änderungen auf der Live-Seite. Bilder für die Galerie liegen in `src/assets/gallery/` und werden in `gallery.yml` referenziert.

---

## Tech-Stack (für Entwickler:innen)

- **Build:** [Vite](https://vite.dev/) — schneller Build, moderne ES-Module
- **UI-Framework:** [Riba.js](https://github.com/ribajs/riba) — Web Components, Datenbindung, wenig Boilerplate
- **Styling:** [Bootstrap 5](https://getbootstrap.com/) (SCSS), stark an das Corporate Design angepasst (Farben, Typo)
- **Templates:** [Pug](https://pugjs.org/) für Komponenten-Markup
- **Karte:** [OpenLayers](https://openlayers.org/) mit OpenStreetMap-Tiles
- **Schriften:** [Fontsource](https://fontsource.org/) (Palanquin, Palanquin Dark)
- **Content:** YAML (`@modyfi/vite-plugin-yaml`), Markdown (`vite-plugin-markdown`) — zur Build-Zeit eingebunden

Lokal: **Node.js ≥ 24**, **Yarn 4**. Build-Ausgabe: statische Dateien im Ordner `_site/`, die sich mit jedem beliebigen Static-Host oder eben GitHub Pages ausliefern lassen.

---

## Lokal bauen und ansehen

```bash
# Abhängigkeiten installieren
yarn install

# Produktions-Build
yarn build

# Ergebnis ansehen (z. B. http://localhost:4173)
yarn preview
```

Entwicklung mit Watch und Live-Vorschau:

```bash
yarn start
```

---

## Lizenz

MIT — siehe [LICENSE](LICENSE).
