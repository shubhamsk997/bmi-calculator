# BMI Index Calculator

A production-ready Next.js 15 App Router BMI calculator with responsive UI, client-side validation, health-content pages, JSON-LD, generated sitemap/robots routes, and Vercel Analytics.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. Use `npm run build` for a production validation build, then `npm start`.

## Deploy to Vercel

1. Push this directory to a Git repository and import it at Vercel, or run `vercel` from the project directory.
2. Set `NEXT_PUBLIC_SITE_URL` to the production canonical URL, without a trailing slash.
3. Replace the Google Search Console and Bing Webmaster verification values in `app/layout.tsx`.
4. Submit `https://your-domain.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.

## Architecture

- `app/` contains App Router routes, metadata, sitemap, and robots configuration.
- `components/calculator.tsx` contains the live accessible calculator and local-only history.
- `lib/bmi.ts` contains validated calculation and category logic.
- `lib/schema.tsx` contains reusable JSON-LD helpers.

## Content and safety

BMI is presented as an adult screening measure, not a diagnosis. Medical content should be periodically reviewed by an appropriately licensed clinician before publication. The calculator does not transmit measurement inputs.
