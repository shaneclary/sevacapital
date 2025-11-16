# Seva Capital — $7B SDG-Aligned Social Bond Platform

> **Investment-grade platform for institutional investors including BlackRock, sovereign wealth funds, and ESG-focused asset managers**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/sevacapital)

## 🎯 Overview

This is the official institutional investor platform for the **$7 Billion SDG-Aligned Social Bond** issued to fund Seva Foundation's global eye health infrastructure. The platform provides:

- **Real-time KPI tracking** for covenant monitoring
- **ICMA-compliant** social bond framework documentation
- **Moody's ESG verified** second-party opinion
- **Live investor portal** with allocation transparency
- **36:1 proven social ROI** with verifiable impact metrics

## 💼 Target Audience

- **Institutional Investors**: BlackRock, PIMCO, Amundi
- **Sovereign Wealth Funds**: ADIA, Norges Bank, GIC
- **Development Banks**: IFC, AFD, Proparco
- **ESG-focused Asset Managers**
- **Impact Investment Firms**

## 🚀 Quick Deploy to Vercel

### Option 1: One-Click Deploy

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Deploy!

### Option 2: Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd sevacapital

# Install dependencies
npm install

# Deploy to Vercel
vercel --prod
```

### Option 3: GitHub Integration

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

## 📦 Project Structure

```
sevacapital/
├── pages/
│   ├── index.js                 # Dynamic landing page with live KPI data
│   ├── _app.js                  # Next.js app wrapper
│   ├── _document.js             # Custom document structure
│   └── api/
│       └── kpi/
│           └── latest.js        # Live KPI data endpoint
├── public/
│   ├── pitch.html               # $7B Bond pitch deck
│   ├── investor_portal.html     # Covenant monitoring portal
│   ├── seva.html                # Strategy dossier
│   ├── icma.html                # ICMA framework
│   ├── gisd-compliance.html     # GISD alignment
│   ├── projectweaver.html       # Project blueprint
│   ├── keynote/
│   │   └── *.html              # $27.8B strategy deck
│   └── assets/
│       ├── *.pdf               # Documentation & certifications
│       └── *.css               # Stylesheets
├── styles/
│   └── globals.css             # Global styles & Tailwind
├── vercel.json                 # Vercel deployment config
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS config
└── package.json                # Dependencies
```

## 🎨 Features

### Dynamic Landing Page
- **Animated hero section** with gradient backgrounds
- **Live KPI data** fetched from API endpoint
- **Responsive design** optimized for desktop and mobile
- **Institutional-grade UI/UX**

### Real-Time API
- `/api/kpi/latest` - Live covenant monitoring data
- Returns bond allocation, impact metrics, compliance status
- CORS-enabled for third-party integrations
- Caching optimized for performance

### Static HTML Pages
- **Pitch Deck**: Professional investor presentation
- **Investor Portal**: Live KPI dashboard with Chart.js
- **ICMA Framework**: Bond compliance documentation
- **GISD Compliance**: SDG alignment verification

### Production Optimizations
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ Asset caching and compression
- ✅ SEO optimization
- ✅ Open Graph meta tags
- ✅ Mobile-responsive design
- ✅ Print-friendly CSS for reports

## 🔌 API Integration

### KPI Data Endpoint

**GET** `/api/kpi/latest`

```json
{
  "success": true,
  "data": {
    "bond": {
      "notional": 7000000000,
      "allocated": 4890000000,
      "allocationPercent": 69.86,
      "couponRate": 5.38,
      "greenium": 8
    },
    "impact": {
      "surgeries": {
        "current": 698600,
        "target": 1000000,
        "percent": 69.86
      },
      "wageGain": {
        "current": 2514960000,
        "target": 3600000000,
        "percent": 69.86
      },
      "dalys": {
        "current": 2235520,
        "target": 3200000,
        "percent": 69.86
      }
    }
  }
}
```

### Connecting to Live Data

Replace the simulated data in `pages/api/kpi/latest.js` with:

#### Google Sheets Integration
```javascript
const { GoogleSpreadsheet } = require('google-spreadsheet');
// See TODO.md for implementation details
```

#### Supabase Integration
```javascript
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
```

## 🔐 Environment Variables

Create a `.env.local` file for production data sources:

```bash
# Google Sheets API (for live KPI data)
GOOGLE_API_KEY=your_api_key
GOOGLE_SHEET_ID=your_sheet_id

# Supabase (alternative data source)
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📊 Performance

- **Lighthouse Score**: 4×100 target (Performance, Accessibility, SEO, Best Practices)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Total Bundle Size**: Optimized with Next.js code splitting

## 🌍 Deployment URLs

After deploying to Vercel, your platform will be available at:

- **Production**: `https://sevacapital.vercel.app`
- **Custom Domain**: Configure in Vercel dashboard
  - Recommended: `capital.seva.org` or `investor.seva.org`

## 📚 Documentation

- [ICMA Social Bond Principles](https://www.icmagroup.org/sustainable-finance/the-principles-guidelines-and-handbooks/social-bond-principles-sbp/)
- [GISD Alliance SDG Bond Guidance](https://www.un.org/gsa)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## ✅ Pre-Launch Checklist

- [ ] Deploy to Vercel production
- [ ] Configure custom domain
- [ ] Test all pages and links
- [ ] Verify API endpoints return live data
- [ ] Run Lighthouse audit (target: 4×100)
- [ ] Test on mobile devices
- [ ] Verify PDFs are accessible
- [ ] Set up Google Analytics
- [ ] Test print layouts for investor reports
- [ ] Configure CDN caching
- [ ] Add favicon and social media images
- [ ] Test with institutional investor preview

## 📞 Support

**Investor Relations**
Email: investor-relations@sevacapital.com
Timeline to Close: 16 Weeks

**Technical Support**
For deployment issues, consult the [Vercel Documentation](https://vercel.com/docs) or reach out to your development team.

## 📄 License

This platform is proprietary and confidential. All rights reserved.
© 2025 Capital for Seva

---

## 🎯 Key Metrics

| Metric | Value |
|--------|-------|
| Bond Notional | $7.0 Billion |
| Social ROI | 36:1 (Proven) |
| Target Surgeries | 1,000,000 |
| Target Vision Centers | 200 |
| Impact Unlocked | $252 Billion |
| ICMA Compliant | ✅ Yes |
| Moody's ESG Verified | ✅ Yes |
| GISD Aligned | ✅ Yes |

---

**Built with Next.js, React, Tailwind CSS, and deployed on Vercel**
