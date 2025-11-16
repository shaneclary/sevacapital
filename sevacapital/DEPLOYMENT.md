# 🚀 Vercel Deployment Guide - Seva Capital Platform

## Quick Start: Deploy in 5 Minutes

### Method 1: GitHub + Vercel Auto-Deploy (Recommended)

This is the **fastest and most professional** way to deploy for institutional investors.

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "feat: launch $7B SDG Bond institutional platform"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/sevacapital.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Select your `sevacapital` repository
5. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
6. Click **"Deploy"**

**That's it!** Your platform will be live in 2-3 minutes.

---

### Method 2: Vercel CLI (For Advanced Users)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd sevacapital

# Install dependencies
npm install

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account/team
# - Link to existing project? No
# - Project name? sevacapital
# - Directory? ./
# - Override settings? No
```

Your deployment URL will be displayed: `https://sevacapital-xxx.vercel.app`

---

## Custom Domain Setup

### Option 1: Using Seva Foundation Domain

**Recommended URLs:**
- `capital.seva.org`
- `investor.seva.org`
- `bond.seva.org`

#### Steps:

1. **In Vercel Dashboard:**
   - Go to Project Settings → Domains
   - Add domain: `investor.seva.org`
   - Copy the DNS records provided

2. **In Your DNS Provider** (Cloudflare, Route53, etc.):
   - Add CNAME record:
     ```
     Name: investor
     Value: cname.vercel-dns.com
     TTL: Auto
     ```

3. **Wait for propagation** (5-30 minutes)
4. **Verify SSL certificate** is auto-provisioned

### Option 2: New Domain

If purchasing a new domain for this platform:

**Suggested domains:**
- `sevacapital.com`
- `sevabond.com`
- `capital-for-seva.com`

1. Purchase domain from Vercel or external registrar
2. Follow same steps as above for DNS configuration

---

## Environment Variables

For production deployment with live data:

### In Vercel Dashboard:

1. Go to **Project Settings** → **Environment Variables**
2. Add the following:

```bash
# Google Sheets API (for live KPI feed)
GOOGLE_API_KEY=your_google_api_key
GOOGLE_SHEET_ID=your_sheet_id

# Supabase (alternative data backend)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Email
NEXT_PUBLIC_CONTACT_EMAIL=investor-relations@sevacapital.com
```

3. Set environment for: **Production**, **Preview**, and **Development**
4. **Redeploy** for changes to take effect

---

## Post-Deployment Checklist

### ✅ Immediate Actions (Within 1 Hour)

- [ ] Verify homepage loads: `https://your-domain.vercel.app`
- [ ] Test all navigation links work
- [ ] Verify `/api/kpi/latest` returns data
- [ ] Check mobile responsiveness
- [ ] Test pitch deck loads: `/public/pitch.html`
- [ ] Test investor portal: `/public/investor_portal.html`
- [ ] Verify PDFs are downloadable
- [ ] Test on Safari, Chrome, Firefox, Edge

### ✅ Within 24 Hours

- [ ] Run Lighthouse audit (target: 95+ on all metrics)
  ```bash
  npm install -g @lhci/cli
  lhci autorun --collect.url=https://your-domain.vercel.app
  ```
- [ ] Set up Google Analytics tracking
- [ ] Configure custom domain
- [ ] Test print layouts for investor reports
- [ ] Verify all external links work
- [ ] Add favicon and social media preview images
- [ ] Test email links (`mailto:` addresses)
- [ ] Set up monitoring (Vercel Analytics included)

### ✅ Before Investor Launch

- [ ] **Load test** with 1000+ concurrent users
- [ ] Set up **uptime monitoring** (Vercel provides this)
- [ ] Create **investor preview accounts** (if using auth)
- [ ] Test **data refresh** for KPI endpoint
- [ ] Verify **HTTPS/SSL** certificate is valid
- [ ] Review **privacy policy** and **cookie consent**
- [ ] Test from institutional networks (may have firewall restrictions)
- [ ] Create **PDF export** of key pages for offline sharing
- [ ] Set up **Slack/email alerts** for downtime
- [ ] Prepare **investor onboarding email** with URL

---

## Vercel-Specific Features to Enable

### 1. Analytics

Enable Vercel Analytics for visitor insights:

1. Go to **Analytics** tab in Vercel dashboard
2. Enable **Web Analytics**
3. Add this to `pages/_app.js`:

```javascript
import { Analytics } from '@vercel/analytics/react';

function SevaCapitalApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

### 2. Speed Insights

Monitor Core Web Vitals:

```javascript
import { SpeedInsights } from '@vercel/speed-insights/next';

// Add to _app.js
<SpeedInsights />
```

### 3. Edge Functions

For ultra-fast API responses worldwide:

In `pages/api/kpi/latest.js`, add:

```javascript
export const config = {
  runtime: 'edge',
};
```

### 4. Caching

Optimize API caching in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/api/kpi/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "s-maxage=3600, stale-while-revalidate=86400"
        }
      ]
    }
  ]
}
```

---

## Troubleshooting Common Issues

### Issue: Build Fails

**Solution:**
```bash
# Test build locally first
npm run build

# Check for errors in build output
# Fix any TypeScript/React errors
```

### Issue: API Routes Return 404

**Solution:**
- Ensure files are in `pages/api/` directory
- Check `next.config.js` doesn't have conflicting rewrites
- Verify `vercel.json` API routes configuration

### Issue: Static Files Not Loading

**Solution:**
- Ensure files are in `public/` directory
- Access via `/filename.html` not `/public/filename.html`
- Check browser console for 404 errors

### Issue: Environment Variables Not Working

**Solution:**
- Redeploy after adding environment variables
- Use `NEXT_PUBLIC_` prefix for client-side variables
- Check variables are set for Production environment

### Issue: Slow Load Times

**Solution:**
```bash
# Analyze bundle size
npm run build

# Look for large dependencies
# Consider lazy loading components
# Enable image optimization
```

---

## Monitoring & Maintenance

### Vercel Dashboard Metrics

Monitor these key metrics:

1. **Deployment Status**: All green
2. **Build Time**: < 2 minutes ideal
3. **Bandwidth Usage**: Track for cost estimation
4. **Function Invocations**: API endpoint usage
5. **Error Rate**: Should be < 0.1%

### Set Up Alerts

1. **Deployment Failures**: Email notifications
2. **High Error Rate**: Slack integration
3. **Performance Degradation**: Lighthouse CI in GitHub Actions

---

## Scaling for Institutional Traffic

### Expected Load:

- **Initial Launch**: 500-1,000 concurrent users
- **Roadshow Period**: 2,000-5,000 concurrent users
- **Post-Launch**: 100-500 regular users

### Vercel Automatically Handles:

✅ **Auto-scaling** for traffic spikes
✅ **Global CDN** distribution (190+ edge locations)
✅ **DDoS protection** included
✅ **SSL certificates** auto-renewed
✅ **99.99% uptime** SLA

### Recommended Plan:

- **Pro Plan** ($20/month): For production deployment
  - Custom domains
  - Team collaboration
  - Advanced analytics
  - Priority support

---

## Cost Estimation

### Vercel Pricing:

| Plan | Price | Bandwidth | Builds | Best For |
|------|-------|-----------|--------|----------|
| Hobby | Free | 100 GB | 6,000 min | Testing |
| Pro | $20/mo | 1 TB | Unlimited | **Production** ✅ |
| Enterprise | Custom | Custom | Unlimited | High traffic |

**Estimated monthly cost**: $20-50/month for Pro plan

---

## Security Best Practices

### Already Implemented:

✅ Security headers (CSP, X-Frame-Options)
✅ HTTPS enforced
✅ Content Security Policy
✅ No exposed secrets in code

### Additional Recommendations:

1. **Enable Vercel Firewall** (Enterprise feature)
2. **Set up rate limiting** for API endpoints
3. **Monitor for suspicious activity** in Analytics
4. **Regular dependency updates**:
   ```bash
   npm audit
   npm update
   ```

---

## Final Pre-Launch Command

Run this before sharing with investors:

```bash
# Test everything locally
npm install
npm run build
npm start

# Run Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Check for broken links
npx broken-link-checker http://localhost:3000

# Deploy to production
vercel --prod
```

---

## 🎉 Launch Day Protocol

1. **9:00 AM**: Deploy to production
2. **9:15 AM**: Verify all pages load
3. **9:30 AM**: Send preview to internal team
4. **10:00 AM**: Run final Lighthouse audit
5. **11:00 AM**: Send investor announcement email
6. **Throughout Day**: Monitor Vercel Analytics for traffic
7. **End of Day**: Review error logs and performance

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **Community Forum**: https://github.com/vercel/next.js/discussions

---

## Emergency Rollback

If something goes wrong:

```bash
# In Vercel Dashboard:
# 1. Go to Deployments
# 2. Find last working deployment
# 3. Click "..." → "Promote to Production"

# Or via CLI:
vercel rollback
```

---

**🚀 You're ready to deploy! Good luck with the $7B raise!**
