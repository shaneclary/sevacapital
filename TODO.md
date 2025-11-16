## Capital for Seva — 10/10 Launch Checklist

### 1. Live KPI & Allocation Data
- [ ] Deploy `workers/kpi.js` Cloudflare Worker that reads the Seva Google Sheet (`GOOGLE_API_KEY`, `SHEET_ID` secrets). Endpoint: `/api/kpi/latest`.
- [ ] Update `investor_portal.html` to fetch that endpoint, hydrate surgeries/DALYs/wage/vision-centre metrics, set `data-timestamp`, and surface the dead-man banner when data is >35 days old.
- [ ] Commit `/public/kpi/latest.json` and create `.github/workflows/kpi-update.yml` that writes the JSON on `repository_dispatch` so finance can push updates automatically.

### 2. Documentation & Audit Trail
- [ ] Upload the signed ICMA Social Bond Framework and Moody’s ESG SPO PDFs to `/assets/`.
- [ ] Run `sha256sum` on each PDF; place the hashes in `icma.html` (and optionally list them next to download buttons elsewhere).
- [ ] Store the master workbook in `/audit/source_of_truth.xlsx` and log its SHA-256 in `/audit/hash.txt`. Reject CI if the hash changes without review.

### 3. Pitch & Messaging
- [ ] Insert the AAA co-issuer block in `pitch.html` (IFC/AFD placeholder logos + “subject to final terms” copy).
- [ ] Add a greenium comparables table (AFD/EIB/EBRD) and link to the downloadable DSCR/FX Excel model once ready.
- [ ] Replace any remaining “BlackRock” references with “Institutional Investor” unless written permission is secured.

### 4. Performance, Accessibility, SEO
- [ ] Add `css/print.css` (per provided snippet) and reference it in `investor_portal.html` `<head>` so print preview yields a 4-page KPI packet.
- [ ] Self-host Inter/Canela or run PurgeCSS to trim Tailwind; goal: Lighthouse 4×100.
- [ ] Ensure `<meta name="robots" content="index,follow">` is present; remove any legacy `<base target="_blank">`.

### 5. CI & Testing
- [ ] Add `.github/workflows/lighthouse.yml` with the provided `lighthouserc.json` thresholds (Performance ≥0.95, Accessibility/SEO = 1, Best Practices ≥0.95).
- [ ] Add `.github/workflows/link-check.yml` using lychee (goal ≤1% 404s). Fix any broken citations first.
- [ ] Capture Lighthouse screenshots + lychee report for the PR checklist.

### 6. Security & Compliance
- [ ] Replace the lightweight cookie banner with your production CMP (OneTrust/Cookiebot), storing consent IDs.
- [ ] Add CSP headers via `_headers`/`vercel.json` and SRI attributes for Chart.js/Tailwind.
- [ ] Run `npm audit --audit-level moderate` (or pnpm/yarn equivalent) and address flagged packages.

### 7. Analytics & Feedback (post-launch)
- [ ] Embed the Typeform “Was this data helpful?” widget in the investor portal footer; pipe responses to Slack #investor-relations.
- [ ] Add `utm_source` to external links and build a GA4 dashboard to track pitch → portal conversion.
- [ ] Schedule a monthly recurring task to export KPI CSV, compute hash, and commit (keeps Git history as audit record).

### 8. Verification Tasks
- [ ] Run Lighthouse locally and save the 4×100 screenshot.
- [ ] Run `lychee --verbose` on the repo and archive the report (prove ≤1% 404s).
- [ ] Curl the Worker endpoint (`curl https://yourdomain.com/api/kpi/latest`) to confirm <24h timestamp.
- [ ] Curl the ICMA/SPO assets to confirm public reachability.
- [ ] Print-preview investor portal to confirm `@media print` layout.
- [ ] Manually test the dead-man switch by editing `data-timestamp` or advancing system clock (+40 days).

When every box is checked, tag `v1.0.0`, deploy, and notify investors.
