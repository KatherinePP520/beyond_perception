# SEO Deployment & Implementation Instructions

## Quick Answer: Should You Deploy First?

**YES** - Deploy before external validation tasks, but run local testing first.

```
Local Test → Deploy → External Validation → Ongoing SEO
```

---

## Phase 1: Local Testing (Do BEFORE Deploying)

### 1.1 Build and Test Locally

```bash
# Navigate to project directory
cd E:\codex\beyond_perception2

# Install dependencies (if not already done)
npm install

# Build the project
npm run build

# Preview the build locally
npm run preview
```

**What to Check:**
- [ ] Homepage loads without errors
- [ ] All service pages load:
  - `/ai-automation.html`
  - `/custom-software.html`
  - `/business-it-services.html`
- [ ] Blog pages load:
  - `/blog/index.html`
  - `/blog/what-is-ai-automation.html`
- [ ] Navigation links work
- [ ] Internal links between service pages work
- [ ] Language switcher works (EN/ZH)
- [ ] No console errors in browser DevTools (F12)

### 1.2 Verify File Structure

Ensure these files exist:

```
public/
├── index.html (updated by you)
├── ai-automation.html
├── custom-software.html
├── business-it-services.html
├── blog/
│   ├── index.html
│   └── what-is-ai-automation.html
├── sitemap.xml
└── assets/
    └── ... (images, icons)
```

### 1.3 Validate HTML Locally

**Option A: Online Validator**
1. Go to https://validator.w3.org/
2. Upload each HTML file from `public/`
3. Fix any critical errors

**Option B: VS Code Extension**
1. Install "HTMLHint" extension
2. Open each HTML file
3. Check Problems panel for errors

---

## Phase 2: Deploy to Vercel

### 2.1 Check Git Status

```bash
cd E:\codex\beyond_perception2

# See what changed
git status
```

**Expected changes:**
- Modified: `index.html`
- Modified: `src/main.js`
- Modified: `public/sitemap.xml`
- New: `public/ai-automation.html`
- New: `public/custom-software.html`
- New: `public/business-it-services.html`
- New: `public/blog/index.html`
- New: `public/blog/what-is-ai-automation.html`
- New: `BACKLINK_STRATEGY.md`
- New: `SEO_VALIDATION.md`
- New: `SEO_CHECKLIST.md`
- New: `DEPLOYMENT_INSTRUCTIONS.md` (this file)

### 2.2 Commit Changes

```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "SEO improvements: enhanced schema, service pages, blog, internal linking"

# Push to remote (triggers Vercel deploy)
git push origin main
```

### 2.3 Monitor Vercel Deployment

1. Go to https://vercel.com/dashboard
2. Find your `beyond-perception` or `beyondperceptiontech` project
3. Click on the deployment to view logs
4. Wait for status to change to **Ready**

**If deployment fails:**
- Click "View Build Logs"
- Look for error messages
- Common issues:
  - Syntax error in HTML/JS
  - Missing closing tags
  - Invalid JSON in schema
- Fix the issue, commit, and push again

### 2.4 Verify Live URLs

After deployment succeeds, visit these URLs:

```
Main Pages:
✓ https://www.beyondperceptiontech.com/
✓ https://www.beyondperceptiontech.com/ai-automation.html
✓ https://www.beyondperceptiontech.com/custom-software.html
✓ https://www.beyondperceptiontech.com/business-it-services.html
✓ https://www.beyondperceptiontech.com/blog/
✓ https://www.beyondperceptiontech.com/blog/what-is-ai-automation.html

Sitemap:
✓ https://www.beyondperceptiontech.com/sitemap.xml

Chinese Pages (if applicable):
✓ https://www.beyondperceptiontech.com/zh/ai-automation.html
```

**For each page, verify:**
- [ ] Page loads without errors
- [ ] Navigation bar renders correctly
- [ ] Language switcher appears
- [ ] Footer links work
- [ ] Visual design matches homepage style

---

## Phase 3: Google Search Console Setup

### 3.1 Add Property

1. Go to https://search.google.com/search-console
2. Click **"Add Property"** (top left)
3. Choose property type:
   - **Recommended:** Enter `beyondperceptiontech.com` (Domain property - verifies all subdomains)
   - **Alternative:** Enter `https://www.beyondperceptiontech.com` (URL prefix)

### 3.2 Verify Ownership - DNS Method (Recommended)

1. Select **"Domain"** property type
2. Enter: `beyondperceptiontech.com`
3. Click **"Continue"**
4. Copy the TXT record value (looks like `google-site-verification=abc123...`)
5. Go to your DNS provider:
   - GoDaddy, Namecheap, Cloudflare, etc.
6. Add new TXT record:
   - **Type:** `TXT`
   - **Host/Name:** `@`
   - **Value:** (paste the verification code)
   - **TTL:** `3600` (or default)
7. Save the record
8. Wait 5-10 minutes for DNS propagation
9. Click **"Verify"** in Search Console

### 3.3 Verify Ownership - HTML File Method (Alternative)

If you can't access DNS:

1. Select **"URL prefix"** property type
2. Enter: `https://www.beyondperceptiontech.com`
3. Under "HTML file", click **"Download"**
4. Save the file (e.g., `google12345.html`)
5. Upload to your project:
   ```bash
   # Move file to public folder
   mv ~/Downloads/google12345.html E:\codex\beyond_perception2\public\
   ```
6. Commit and push:
   ```bash
   git add public/google12345.html
   git commit -m "Add Google verification file"
   git push
   ```
7. Wait for Vercel deploy to complete
8. Click **"Verify"** in Search Console

### 3.4 Submit Sitemap

1. In Search Console, select your property
2. Click **"Sitemaps"** in left sidebar
3. Under "Add a new sitemap", enter: `sitemap.xml`
4. Click **"Submit"**
5. Verify status shows **"Success"** (green checkmark)

### 3.5 Request Indexing for New Pages

1. Click the **URL Inspection** bar at the top
2. Enter each URL and press Enter:
   ```
   https://www.beyondperceptiontech.com/ai-automation.html
   https://www.beyondperceptiontech.com/custom-software.html
   https://www.beyondperceptiontech.com/business-it-services.html
   https://www.beyondperceptiontech.com/blog/
   https://www.beyondperceptiontech.com/blog/what-is-ai-automation.html
   ```
3. For each URL, click **"Request Indexing"**
4. This queues them for crawling (typically within 24-48 hours)

### 3.6 Enable Enhancements

After verification, check these reports:

1. **Mobile Usability** - Ensure no errors
2. **Core Web Vitals** - Monitor performance
3. **Page Experience** - Check overall UX signals

---

## Phase 4: Bing Webmaster Tools

### 4.1 Add Site

1. Go to https://www.bing.com/webmasters
2. Sign in with Microsoft account (create if needed)
3. Click **"Add Site"**
4. Enter: `https://www.beyondperceptiontech.com`

### 4.2 Verify Ownership

**Option A - Import from Google (Easiest):**
1. Click **"Import from Google Search Console"**
2. Authorize Bing to access GSC data
3. Verification is automatic

**Option B - DNS Verification:**
1. Copy the verification code
2. Add TXT record at your DNS provider (same as Google)
3. Click **"Verify"**

### 4.3 Submit Sitemap

1. Go to **"Sitemaps"** in left sidebar
2. Enter: `sitemap.xml`
3. Click **"Submit"**

---

## Phase 5: Schema Validation

### 5.1 Test Homepage Schema

1. Go to https://search.google.com/test/rich-results
2. Enter: `https://www.beyondperceptiontech.com/`
3. Click **"Test URL"**
4. Wait for results

**Expected Results (All Should Pass):**
- ✅ FAQPage (8 questions)
- ✅ Organization
- ✅ ProfessionalService
- ✅ Service
- ✅ SoftwareApplication
- ✅ ContactPoint
- ✅ BreadcrumbList

**If Errors Appear:**
- Click on the error to see details
- Note the specific line/field
- Edit `index.html` in the schema section
- Fix syntax issues (common problems below)
- Commit, push, and re-test

### 5.2 Common Schema Errors & Fixes

**Error: "Missing required field"**
```json
// Make sure all required fields exist
{
  "@type": "Organization",
  "name": "Beyond Perception",  // Required
  "url": "https://..."  // Required
}
```

**Error: "Invalid value type"**
```json
// Wrong:
"email": "katherine@beyondperceptiontech.com"

// Correct:
"email": "mailto:katherine@beyondperceptiontech.com"
```

**Error: "Unclosed bracket"**
- Check for matching `{}` and `[]`
- Use a JSON validator: https://jsonlint.com/

### 5.3 Test Service Pages

Repeat for each:

```
https://www.beyondperceptiontech.com/ai-automation.html
https://www.beyondperceptiontech.com/custom-software.html
https://www.beyondperceptiontech.com/business-it-services.html
```

**Expected:** Service + FAQPage schema detected

### 5.4 Test Blog Post

```
https://www.beyondperceptiontech.com/blog/what-is-ai-automation.html
```

**Expected:** BlogPosting + FAQPage schema detected

---

## Phase 6: Performance Testing

### 6.1 PageSpeed Insights

1. Go to https://pagespeed.web.dev/
2. Enter each URL and click **"Analyze"**

**Test These URLs:**
- Homepage
- Each service page (3)
- Blog post

**Target Scores:**

| Metric | Mobile Target | Desktop Target |
|--------|---------------|----------------|
| Performance | 70+ | 85+ |
| Accessibility | 90+ | 90+ |
| Best Practices | 85+ | 85+ |
| SEO | 90+ | 90+ |

### 6.2 Fix Common Performance Issues

**If LCP (Largest Contentful Paint) > 2.5s:**
- Add preload for critical images
- Reduce hero section complexity
- Consider CDN for images

**If CLS (Cumulative Layout Shift) > 0.1:**
- Ensure all images have `width` and `height` (already done)
- Avoid injecting content above existing content

**If TBT (Total Blocking Time) > 200ms:**
- Defer non-critical JavaScript
- Reduce JavaScript execution time

### 6.3 Mobile-Friendly Test

1. Go to https://search.google.com/test/mobile-friendly
2. Enter: `https://www.beyondperceptiontech.com/`
3. Click **"Test URL"**
4. Verify: **"Page is mobile friendly"**

**If issues found:**
- Review specific problems listed
- Check CSS media queries
- Ensure touch targets are 44px+ minimum

---

## Phase 7: Ongoing SEO (Start Week 2)

### 7.1 Weekly Monitoring

**Every Monday (15 min):**

1. **Google Search Console:**
   - Check "Coverage" for crawl errors
   - Review "Performance" for ranking changes
   - Check "Enhancements" for schema issues

2. **Check Keyword Rankings:**
   - Go to "Performance" > "Search results"
   - Note top keywords
   - Track movement week-over-week

### 7.2 Monthly Tasks

**First of Each Month (1 hour):**

1. **Content Publishing:**
   - Write 2 blog posts (1500-2500 words each)
   - Add proper frontmatter (date, author, category)
   - Include internal links to service pages
   - Add FAQ schema to each post
   - Publish to `/blog/`

2. **Performance Review:**
   - Run PageSpeed Insights on all pages
   - Address any new issues
   - Update sitemap if new pages added

3. **Backlink Outreach:**
   - Respond to 10 HARO queries
   - Pitch 3 guest posts
   - Share content on LinkedIn

### 7.3 Quarterly Strategy Review

**Every 3 Months:**

1. **Comprehensive Audit:**
   - Full SEO audit using checklist
   - Competitor analysis
   - Content gap analysis

2. **Strategy Refinement:**
   - Review what's working
   - Adjust keyword targets
   - Update content calendar

---

## Troubleshooting Guide

### Deployment Fails

**Symptoms:**
- Vercel shows "Failed" status
- Build logs show errors

**Steps:**
1. Click "View Build Logs"
2. Look for lines with `Error:`
3. Common fixes:
   ```bash
   # Run build locally to catch errors
   npm run build

   # Check for syntax errors
   npx eslint .
   ```

### Schema Not Detected

**Symptoms:**
- Rich Results Test shows "No rich results found"

**Steps:**
1. Verify JSON syntax at https://jsonlint.com/
2. Check `<script>` tag has `type="application/ld+json"`
3. Ensure no unclosed brackets or quotes
4. Re-test after deploy (cache takes 2-5 minutes)

### Pages Not Indexing

**Symptoms:**
- URL Inspection shows "URL is not on Google"

**Steps:**
1. Verify sitemap submitted in Search Console
2. Request indexing manually via URL Inspection
3. Check `robots.txt` isn't blocking:
   ```
   https://www.beyondperceptiontech.com/robots.txt
   ```
4. Wait 48-72 hours for initial crawl

### Sitemap Errors

**Symptoms:**
- Search Console shows "Error" for sitemap

**Steps:**
1. Open `sitemap.xml` in browser
2. Verify XML is valid (no syntax errors)
3. Check all URLs use `https://www.beyondperceptiontech.com/`
4. Ensure proper XML structure:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://...</loc>
       <lastmod>2026-03-23</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
   </urlset>
   ```

---

## Quick Command Reference

```bash
# ======================================
# LOCAL TESTING
# ======================================
cd E:\codex\beyond_perception2
npm install
npm run build
npm run preview

# ======================================
# DEPLOY
# ======================================
git status
git add .
git commit -m "SEO improvements"
git push origin main

# ======================================
# CHECK DEPLOYMENT
# ======================================
# Visit: https://vercel.com/dashboard
# Wait for "Ready" status
```

---

## Contact & Resources

### Search Console
- https://search.google.com/search-console

### Bing Webmaster
- https://www.bing.com/webmasters

### Schema Testing
- https://search.google.com/test/rich-results

### Performance Testing
- https://pagespeed.web.dev/

### Mobile Testing
- https://search.google.com/test/mobile-friendly

### HTML Validation
- https://validator.w3.org/

### JSON Schema Validation
- https://jsonlint.com/

---

## Checklist Summary

| Phase | Task | Status |
|-------|------|--------|
| 1 | Local build succeeds | ☐ |
| 1 | All pages load locally | ☐ |
| 1 | No console errors | ☐ |
| 2 | Git push succeeds | ☐ |
| 2 | Vercel deploy shows "Ready" | ☐ |
| 2 | All URLs load on live site | ☐ |
| 3 | Google Search Console verified | ☐ |
| 3 | Sitemap submitted successfully | ☐ |
| 3 | URLs submitted for indexing | ☐ |
| 4 | Bing Webmaster verified | ☐ |
| 4 | Sitemap submitted to Bing | ☐ |
| 5 | Schema validation passes | ☐ |
| 6 | PageSpeed scores meet targets | ☐ |
| 6 | Mobile-friendly test passes | ☐ |

---

*Document Version: 1.0*
*Created: 2026-03-23*
*Next Review: 2026-04-23*
