# Game Studio Static Website

A simple, no-build static website scaffold for a game studio.

## Folder structure

```
/
  index.html
  404.html
  robots.txt
  sitemap.xml
  site.webmanifest
  about/
    index.html
  games/
    index.html
  contact/
    index.html
  assets/
    css/
      styles.css
    js/
      main.js
    images/
      logo.svg
    icons/
      favicon.svg
```

## Edit the basics

- Update studio name and copy in:
  - `index.html`
  - `about/index.html`
  - `games/index.html`
  - `contact/index.html`
- Update social preview / domain:
  - `sitemap.xml`
  - `robots.txt`

## Run locally

You can open `index.html` directly, or run a tiny local server so links behave like a real site.

### Option A: Python (if installed)

```bash
python -m http.server 5173
```

Then visit `http://localhost:5173`.

### Option B: Node (if installed)

```bash
npx serve .
```

