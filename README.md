# Saif Malooq Portfolio

A complete, modern, responsive personal portfolio website for Saif Malooq, built with React, Tailwind CSS, Framer Motion, and Vite.

## Features

- Responsive layout for desktop, tablet, and mobile
- Fixed navigation with mobile hamburger menu
- Dark mode and light mode toggle
- Animated hero typing effect
- Smooth scrolling and section animations
- Skills with progress indicators
- Project cards with filtering
- Certification cards with replaceable placeholder data
- Resume preview and downloadable resume placeholder
- Contact form UI with validation-ready structure
- GitHub contribution graph section
- Scroll-to-top button
- SEO and social sharing meta tags

## Tech Stack

- React.js
- Tailwind CSS
- Framer Motion
- Lucide React
- Vite

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Customization

Most portfolio content lives in `src/data/portfolio.js`.

Replace these placeholders before publishing:

- `personal.github`
- `personal.linkedin`
- `personal.email`
- Project GitHub and live demo links
- Certification credential links
- Files in `public/images/projects`
- Files in `public/images/certifications`
- `public/resume/Saif_Malooq_Resume.pdf`

## Folder Structure

```text
saif-portfolio/
  public/
    images/
      certifications/
      projects/
      hero-ai-workspace.png
    resume/
      Saif_Malooq_Resume.pdf
  src/
    components/
    data/
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
```
