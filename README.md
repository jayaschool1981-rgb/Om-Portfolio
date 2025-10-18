# Om Barvekar — Professional Portfolio (Website)

This package contains a polished multi-page portfolio website tailored for showcasing AI, robotics and software projects.

## What is included
- index.html — Home / Hero / Featured Projects
- projects.html — Projects listing with filters
- project-detail.html — Dynamic project detail template (uses data/project-data.json)
- achievements.html, contact.html, links.html
- assets/css/style.css — refined theme CSS
- assets/js/main.js — dynamic project loading and filters
- data/project-data.json — project metadata
- assets/img/og-image.svg — OG image for previews
- demo_videos/ — placeholder folder for demo videos

## Quick test
Run a simple local server from the folder:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment
- Push to GitHub and enable GitHub Pages or deploy with Vercel/Netlify.
- Replace `formspree` action URL in contact.html with your Formspree form id.
- Add your resume PDF to `assets/Om_Barvekar_Resume.pdf`.
