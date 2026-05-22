# Cinefy — Movie Recommender

Simple client-side movie recommender demo built with Vite.

## Features

- Simple recommender UI using static data
- Fast dev server via Vite

## Requirements

- Node.js (16+ recommended)

## Install

Install dependencies:

```bash
npm install
```

## Development

Start the dev server:

```bash
npm run dev
```

Open the app at the address Vite prints.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Project files

- index.html — App entry
- app.js, recommender.js, movies.js — Main JS files
- styles.css — Styles
- vite.config.js — Vite configuration

## Contributing

Feel free to open issues or PRs. For local development, follow the "Install" and "Development" steps above.

## Deploy to GitHub Pages

Easily deploy the built site to GitHub Pages using the `gh-pages` package.

1. Install the dependency:

```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json` (already added in this repo):

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Run the deploy command:

```bash
npm run deploy
```

This will publish the `dist/` output to the `gh-pages` branch. In your repository Settings → Pages, ensure GitHub Pages is set to deploy from the `gh-pages` branch.

<!-- Streamlit version removed. -->

## License

This project has no license specified. Add a `LICENSE` file if you want to permit reuse.
