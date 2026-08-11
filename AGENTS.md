# Repository Guidelines

## Project Structure & Module Organization

This repository is a React 19 single-page application built with Vite. Application code lives in `src/`:

- `src/pages/` contains route-level screens such as `Home.jsx`, `Login.jsx`, and `Register.jsx`.
- `src/components/` contains reusable UI elements.
- `src/layouts/` contains shared page structure, including `Navbar.jsx`.
- `src/assets/` stores project documents and imported static assets.
- `public/` contains files served unchanged, such as SVG icons.

Define routes in `src/App.jsx`, start the application from `src/main.jsx`, and keep global styles in `src/index.css`. Build output is generated in `dist/` and should not be edited manually.

## Build, Lint, and Development Commands

Install dependencies with `npm install`, then use:

- `npm run dev` — start the Vite development server with hot reload.
- `npm run build` — create an optimized production build in `dist/`.
- `npm run preview` — serve the production build locally for verification.
- `npm run lint` — run ESLint across JavaScript and JSX files.

Run linting and a production build before submitting changes.

## Coding Style & Naming Conventions

Use modern ES modules and functional React components. Follow the existing two-space indentation and keep components focused on one responsibility. Name components, layouts, and pages in PascalCase (`InputField.jsx`); use camelCase for variables and functions. Prefer descriptive prop names and keep route paths lowercase.

ESLint is configured in `eslint.config.js` with the recommended JavaScript, React Hooks, and React Refresh rules. Tailwind CSS is available through the Vite plugin; use utility classes for component styling and reserve `src/index.css` for global rules. Match the surrounding quote and semicolon style when editing existing files.

## Testing Guidelines

No automated test framework or coverage requirement is currently configured. For every change, run `npm run lint` and `npm run build`, then verify affected routes manually with `npm run dev`. If tests are introduced, prefer Vitest with React Testing Library, place files beside their components, and name them `*.test.jsx`.

## Commit & Pull Request Guidelines

Git history is not available in this working copy, so no established commit convention can be verified. Use short, imperative commit subjects, for example `Add validation to login form`, and keep unrelated changes in separate commits.

Pull requests should explain the purpose and behavior of the change, list verification steps, and link relevant issues. Include before-and-after screenshots for visible UI changes and note any new dependencies or configuration requirements.
