# Vercel Deployment Instructions

## Quick Deploy Steps

### If you're using Vercel Dashboard:

1. Go to https://vercel.com/new
2. Import your Git repository
3. **Important Settings**:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave blank)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. Click "Deploy"

### If you're using Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## Troubleshooting 404 Errors

If you get a 404 error after deployment:

1. **Check Build Logs**: Go to your deployment in Vercel Dashboard and check the build logs
2. **Verify Framework Detection**: Make sure it says "Framework: Next.js" in the deployment settings
3. **Check Root Directory**: Should be `./` or blank, NOT `sevacapital/`
4. **Force Redeploy**: Sometimes a fresh deployment helps

### Common Issues:

**404 on all pages**:
- Framework not detected correctly
- Wrong root directory
- Build failed silently

**Solution**:
1. Go to Project Settings → General
2. Verify "Root Directory" is blank or `./`
3. Verify "Framework Preset" is "Next.js"
4. Click "Redeploy" from the Deployments tab

## Project Structure (for reference)

```
/
├── pages/
│   ├── index.js          # Main landing page
│   ├── _app.js
│   ├── _document.js
│   └── api/
│       └── kpi/latest.js
├── public/
│   ├── pitch.html
│   ├── investor_portal.html
│   └── ...
├── styles/
│   └── globals.css
├── package.json
├── next.config.js
└── vercel.json
```

## Expected Deployment URL Structure

- `/` → Landing page (React/Next.js)
- `/pitch.html` → Pitch deck (static HTML)
- `/investor_portal.html` → Portal (static HTML)
- `/api/kpi/latest` → API endpoint

All files are at repository root level - no subdirectories needed for deployment.
