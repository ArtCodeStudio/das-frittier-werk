# Das Frittierwerk

Official website for **Das Frittierwerk**, a fast-food restaurant located at Wurster Nordseeküste (Wurster North Sea Coast), Germany. A static website hosted on **GitHub Pages** with content editable via YAML and Markdown files.

---

## Features

- **Menu** — Dynamic menu system with categories and prices (`menu.yml`)
- **Contact** — Contact information with interactive map using OpenStreetMap (OpenLayers)
- **About Us / Quality** — Content pages written in Markdown
- **Gallery** — Image gallery managed via `gallery.yml` with assets in `src/assets/gallery/`
- **Navigation** — Single-page application with anchor links to all sections
- **PWA Support** — Progressive Web App with manifest and offline capabilities
- **Responsive Design** — Mobile-first design using Bootstrap 5

---

## Content Editing

All content is managed through simple YAML and Markdown files that can be edited directly on GitHub. After saving changes, the site automatically rebuilds and deploys.

| Content | File |
|---------|------|
| Menu | [`src/content/menu.yml`](src/content/menu.yml) |
| Contact | [`src/content/contact.yml`](src/content/contact.yml) |
| Gallery | [`src/content/gallery.yml`](src/content/gallery.yml) |
| Site Metadata | [`src/content/site.yml`](src/content/site.yml) |
| About Us | [`src/content/about.md`](src/content/about.md) |
| Quality | [`src/content/quality.md`](src/content/quality.md) |
| Privacy Policy | [`src/content/datenschutz.md`](src/content/datenschutz.md) |
| Legal Notice | [`src/content/impressum.md`](src/content/impressum.md) |

**Editing on GitHub:** Simply edit the file → save → the site will rebuild and deploy automatically.

---

## Tech Stack

- **Build Tool:** [Vite](https://vitejs.dev/) — Fast build tool and dev server
- **UI Framework:** [Riba.js](https://github.com/ribajs/riba) — Web Components with data binding
- **Styling:** Bootstrap 5 (SCSS) with custom corporate design
- **Templates:** [Pug](https://pugjs.org/) — Template engine for HTML generation
- **Maps:** [OpenLayers](https://openlayers.org/) + OpenStreetMap
- **Fonts:** [Fontsource](https://fontsource.org/) (Palanquin family)
- **Content:** YAML + Markdown processed at build time
- **Package Manager:** Yarn 4

**Requirements:** Node.js ≥ 24, Yarn 4

**Output Directory:** `_site/`

---

## Project Structure

```
das-frittier-werk/
├── src/
│   ├── assets/          # Static assets (images, fonts, etc.)
│   │   └── gallery/      # Gallery images
│   ├── content/         # Content files (YAML + Markdown)
│   │   ├── menu.yml      # Menu items and prices
│   │   ├── contact.yml   # Contact information
│   │   ├── gallery.yml   # Gallery configuration
│   │   ├── site.yml      # Site metadata and labels
│   │   ├── about.md      # About us page content
│   │   ├── quality.md    # Quality page content
│   │   ├── datenschutz.md # Privacy policy
│   │   └── impressum.md  # Legal notice
│   ├── scss/            # Stylesheets (Bootstrap + custom)
│   ├── ts/              # TypeScript source files
│   └── views/           # Pug templates
│       ├── layouts/     # Layout templates
│       ├── pages/       # Page templates
│       └── partials/    # Reusable components
├── scripts/             # Build scripts
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── vite.config.js       # Vite configuration
├── vite-plugin-pug-pages.js  # Custom Pug plugin
├── vite-plugin-manifest.js   # PWA manifest plugin
└── package.json         # Dependencies and scripts
```

---

## Local Development

### Prerequisites

- Node.js ≥ 24
- Yarn 4

### Installation

```bash
yarn install
```

### Development Server

Start the development server with live reload:

```bash
yarn start
```

This command runs both the file watcher and preview server concurrently. The site will be available at `http://localhost:4173` (or another port if 4173 is in use).

### Development Scripts

- `yarn start` — Start development server with live reload (watch + preview)
- `yarn watch` — Watch for file changes and rebuild
- `yarn hmr` — Start Vite dev server with HMR (Hot Module Replacement)
- `yarn preview` — Preview production build locally
- `yarn build` — Build for production
- `yarn build:dev` — Build for development
- `yarn check` — Type-check TypeScript without emitting files
- `yarn clear` — Remove build output directory (`_site/`)

---

## Building

### Production Build

```bash
yarn build
```

The production build will be output to `_site/` directory.

### Preview Production Build

```bash
yarn preview
```

This serves the production build locally, typically at `http://localhost:4173`.

---

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. **Repository Setup:** Ensure the repository is on GitHub (e.g., `ArtCodeStudio/das-frittierwerk`)
2. **GitHub Pages Configuration:** 
   - Go to **Settings → Pages → Source**
   - Select **GitHub Actions** as the source
3. **Workflow:** The workflow file `.github/workflows/node-gh-pages.yml` automatically builds and deploys on every push to the `main` branch

### Deployment URL

- GitHub Pages URL: `https://artcodestudio.github.io/das-frittierwerk/`
- Custom domain: Can be configured in GitHub Pages settings

### Manual Deployment

You can also trigger a manual deployment via GitHub Actions:
- Go to **Actions** tab
- Select **Deploy GitHub Page** workflow
- Click **Run workflow**

---

## Custom Plugins

This project includes custom Vite plugins:

- **`vite-plugin-pug-pages.js`** — Compiles Pug templates to HTML and registers them as multi-page entries. Automatically discovers `.pug` files, loads content from YAML/Markdown files, and injects them into Vite's build process.
- **`vite-plugin-manifest.js`** — Generates PWA manifest file (`site.webmanifest`) from site metadata.

---

## Browser Support

The site is built with modern web standards and supports:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

MIT License — see [LICENSE](LICENSE) file for details.

---

## Author

Pascal Garber <pascal@artandcode.studio>

---

## Repository

[GitHub Repository](https://github.com/ArtCodeStudio/das-frittierwerk)
