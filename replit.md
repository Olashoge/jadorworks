# jadorworks

A Next.js 14 application migrated from Vercel to Replit.

## Stack

- **Framework**: Next.js 14.2.35 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package manager**: npm

## Project Structure

- `src/app/` — App Router pages and layouts
- `src/components/` — Shared UI components
- `src/lib/` — Utility/helper functions

## Running the App

The app runs via the "Start application" workflow:

```
npm run dev
```

Starts on port 5000, bound to 0.0.0.0 for Replit compatibility.

## Configuration Notes

- `next.config.mjs` includes `allowedDevOrigins` set from `REPLIT_DEV_DOMAIN` to suppress Replit proxy cross-origin warnings.
- Port is set to 5000 in both `dev` and `start` scripts to match Replit's webview port.
