# Tzuwei Chen Personal Site

Vue 3 + Vite + TypeScript personal site, prepared for GitHub Pages deployment.

## Current Scope

- Bilingual content in `zh-Hant` and `en`
- Responsive single-page personal site
- Light / dark mode
- SEO metadata and structured data
- GitHub Pages deployment through GitHub Actions

## Main Files

```text
src/
  App.vue
  styles.css
  seo.ts
  content/site.ts
  types.ts

public/
  favicon.svg
  resume/
    tzuwei-chen-zh.pdf
  robots.txt
  site.webmanifest

.github/workflows/
  deploy.yml
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build output goes to `dist/`.

## Deploy to GitHub Pages

This repo already includes `.github/workflows/deploy.yml`.

### 1. Initialize git locally

```bash
git init
git add .
git commit -m "Initial personal site"
git branch -M main
```

### 2. Create a GitHub repository

Create a new repo on GitHub, for example:

```text
tzuwei-resume-site
```

### 3. Connect and push

Replace `<your-github-username>` with your GitHub account:

```bash
git remote add origin git@github.com:<your-github-username>/tzuwei-resume-site.git
git push -u origin main
```

If you use HTTPS instead of SSH:

```bash
git remote add origin https://github.com/<your-github-username>/tzuwei-resume-site.git
git push -u origin main
```

### 4. Enable GitHub Pages

In the GitHub repo:

```text
Settings
→ Pages
→ Build and deployment
→ Source: GitHub Actions
```

### 5. Wait for deployment

After pushing to `main`, GitHub Actions will:

1. install dependencies
2. build the site
3. deploy `dist/` to GitHub Pages

Your public URL will usually be:

```text
https://<your-github-username>.github.io/tzuwei-resume-site/
```

If the repo name is exactly:

```text
<your-github-username>.github.io
```

then the site will be published at the root domain:

```text
https://<your-github-username>.github.io/
```

## Content Updates

- Edit text content in `src/content/site.ts`
- Replace assets under `public/`
- Push to `main` again to redeploy
