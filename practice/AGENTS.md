# AGENTS.md

## Project overview
- This workspace is a Vite + React app using JavaScript and JSX.
- The main entry points are src/main.jsx and src/App.jsx.
- Styling is handled with CSS files in src/.

## Working conventions
- Prefer small, focused changes that fit the existing React component structure.
- Keep new UI logic in functional components and use standard React patterns.
- Follow the existing style in the repo: JSX, single quotes, no semicolons, and simple imports.
- Avoid introducing new libraries, build tools, or state management solutions unless explicitly requested.
- When suggesting or generating code snippets, keep them concise and aligned with this minimal Vite React setup.

## Common commands
- npm install
- npm run dev
- npm run build
- npm run lint

## Notes for agents
- If you add or edit components, keep the changes local to the existing app structure unless a new feature clearly needs a new module.
- Preserve the current app behavior and styling unless the task specifically asks for a redesign.
