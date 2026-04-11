# Harshvardhan Singh — Portfolio

A dark-themed developer portfolio built with React and CSS Modules.

## 🚀 Quick Start

```bash
npm install
npm start
```

Opens at **http://localhost:3000**. Requires Node.js 16+.

## 📁 Folder Structure

```
src/
├── App.jsx                          # Root — composes all sections
├── index.js                         # React entry point
│
├── data/
│   └── portfolioData.js             # ✏️  ALL your content lives here
│                                    #     Edit this to update the site
│
├── hooks/
│   ├── useInView.js                 # Intersection Observer for fade-in
│   └── useActiveSection.js          # Tracks which nav section is active
│
├── styles/
│   └── global.css                   # CSS variables, resets, animations
│
└── components/
    ├── FadeIn/
    │   └── FadeIn.jsx               # Reusable scroll-triggered fade wrapper
    │
    ├── SectionHeader/
    │   ├── SectionHeader.jsx        # Numbered heading used in each section
    │   └── SectionHeader.module.css
    │
    ├── Navbar/
    │   ├── Navbar.jsx               # Sticky nav with mobile hamburger
    │   └── Navbar.module.css
    │
    ├── Hero/
    │   ├── Hero.jsx                 # Landing section with typewriter effect
    │   └── Hero.module.css
    │
    ├── Skills/
    │   ├── Skills.jsx               # Tech stack + achievement stats
    │   └── Skills.module.css
    │
    ├── Experience/
    │   ├── Experience.jsx           # Timeline, education, certifications
    │   └── Experience.module.css
    │
    ├── Projects/
    │   ├── Projects.jsx             # Project cards with stack tags
    │   └── Projects.module.css
    │
    ├── Connect/
    │   ├── Connect.jsx              # Contact cards + mailto form
    │   └── Connect.module.css
    │
    └── Footer/
        ├── Footer.jsx
        └── Footer.module.css
```

## ✏️ Updating Content

**All resume content is in one file: `src/data/portfolioData.js`**

- Add a new project → add an object to `PROJECTS`
- Add a new job → add an object to `EXPERIENCE`
- Update skills → edit the `SKILLS` array
- Change contact info → edit `PERSONAL_INFO`
- Add a GitHub link to a project → set the `github` field in `PROJECTS`

## 📧 Real Email Form (Optional)

The contact form currently uses `mailto:` (opens mail client). For a proper in-browser send:

1. **Formspree** — sign up at formspree.io, get an endpoint URL, replace the `handleSubmit` logic in `Connect.jsx`
2. **EmailJS** — free 200 emails/month, add their SDK and call `emailjs.send()` on submit

## 🌐 Deploy

### Vercel (Recommended — free, fast)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the /build folder to netlify.com
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts: "deploy": "gh-pages -d build"
# Add "homepage": "https://yourusername.github.io/portfolio"
npm run build && npm run deploy
```

## 🎨 Customising the Theme

All colors and fonts are CSS variables in `src/styles/global.css`:

```css
--accent: #00e6b4;       /* Change this to your preferred accent color */
--bg-primary: #080c18;   /* Main background */
--font-display: 'Syne';  /* Heading font */
--font-mono: 'Space Mono'; /* Body/code font */
```
