# Images Directory

## ⚠️ Important — Vite Path Convention

In Vite, static assets referenced by a `/` URL path (like `/assets/images/profile.jpg`)
**must be placed in the `public/` folder**, not `src/`.

### Correct location for your images:

```
d:\react.js-portfolio\
└── public\
    └── assets\
        └── images\
            ├── profile.jpg        ← Your profile photo
            ├── project-1.png      ← Skillify screenshot
            ├── project-2.png      ← SignSpeak AI screenshot
            ├── project-3.png      ← MediQuery AI screenshot
            └── project-4.png      ← Twitify screenshot
```

Files placed here are served at `/assets/images/filename.ext` in the browser.
Both `ProfileImage` and `ProjectCard` show styled placeholders if images are missing.
