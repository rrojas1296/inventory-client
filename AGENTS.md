# Repository Guidance

## Commands

- Use pnpm 12.3.4, recorded in `package.json` and `pnpm-lock.yaml`.
- Install dependencies with `pnpm install --frozen-lockfile`.
- Run the dev server with `pnpm dev`.
- Run lint with `pnpm lint`.
- Run the production verification with `pnpm build`; it runs `tsc -b` before `vite build`.
- There is currently no test, format, or typecheck script beyond the typecheck performed by `pnpm build`.

## Structure

- `src/main.tsx` is the application entrypoint. It installs i18n and global CSS, then provides React Query and React Router.
- `src/routes.tsx` assembles the route tree; feature route definitions live beside their feature under `src/modules/*/routes`.
- Current auth routes are `/login`, `/register`, and `/onboarding`.
- Organize feature code under `src/modules`; shared components, hooks, utilities, and types belong under `src/modules/shared`.
- The `@/*` import alias maps to `src/*`. The shadcn aliases are defined in `components.json`; generated UI components belong in `src/modules/shared/components/shadcn`.

## Runtime Details

- API requests use Axios with `VITE_API_BASE_URL`; provide that Vite environment variable locally when exercising API-backed flows. Environment files are ignored by git.
- i18n resources are `src/i18n/locales/en.json` and `src/i18n/locales/es.json`; the configured default language is Spanish, so user-facing strings should be added to both locale files.
- Tailwind v4 and shadcn styles are wired through `src/styles/main.css`; do not introduce a Tailwind config file unless the build setup changes.

## UI Rules

- Reuse shared `Button`, `Input`, and shadcn components before creating one-off controls.
- Standard buttons and inputs are `h-9` (36px), `rounded-xl`, and use `text-sm`; button default padding is `px-2.5`.
- Use `rounded-xl` for standard controls. Smaller button variants use the radii already defined in `src/modules/shared/components/shadcn/button.tsx`.
- Use semantic theme classes such as `bg-primary`, `text-text-foreground-1`, `text-text-foreground-2`, `border-border-input`, and `bg-bg-secondary` instead of hard-coded colors.
- The primary brand color is `#7324f1`, exposed as `bg-primary`/`text-primary`; primary buttons use white `text-text-accent`.
- Inputs and buttons use a `3px` primary focus ring (`ring-3 ring-primary/50`) and primary focus border; preserve these states when adding custom controls.
- Status colors use the semantic `danger`, `success`, `warning`, and `neutral` background, text, and border tokens defined in `src/styles/themes.css`; keep light and dark theme values together there.
