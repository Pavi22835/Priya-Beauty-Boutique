# Sri Devi Beauty & Boutique — Static Website Demo

A responsive React + Vite demo for a combined beauty parlour and tailoring boutique, with Tamil / English language switching.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally
Open PowerShell in this project folder and run:

```powershell
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`. Open it in your browser.

## Production build
```powershell
npm run build
npm run preview
```

The production-ready static files are generated in `dist/`.

## Project structure
- `src/components/` contains shared UI and layout components.
- `src/sections/` contains the home-page sections.
- `src/data/` contains business details, translations and gallery entries.
- `src/hooks/` and `src/utils/` contain shared language and WhatsApp helpers.
- `src/styles/` separates global, component and responsive styles.
- `public/images/` contains the brand logo; portfolio photography is currently loaded from the URLs in `src/data/gallery.js`.

## Before showing the demo to a real business
Update the business details in `src/data/business.js`:
- `name` / brand text in the `Brand` component
- `whatsappNumber`: use the real number with country code, digits only, e.g. `919876543210`
- `phoneDisplay`
- `address`
- `hours`
- `instagramUrl`

The bilingual website copy is in `src/data/translations.js`, and the portfolio image URLs are in `src/data/gallery.js`. Replace sample prices, testimonials and image URLs with approved details and genuine customer feedback before publishing. Prices and reviews are sample content, not verified claims.

## Static-site notes
- No backend, database, login, or server-side booking system.
- The language switch changes the website copy locally in the browser.
- Service enquiry links open WhatsApp with a pre-filled message.
- The phone link uses the configured phone number.
- Images and Google Fonts are loaded from external providers, so an internet connection is needed for those assets.
- The sample WhatsApp number is a placeholder. Replace it before testing real contact actions.

## Deploy
Upload the contents of `dist/` to a static host such as Netlify or Vercel. No environment variables are needed for this demo.
