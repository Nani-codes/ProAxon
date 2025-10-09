# ProAxon (Next.js static wrapper)

## Run Dev

```bash
npm run dev
```

Then open http://localhost:3000/

- `/` -> serves `public/index.html`
- `/about` -> serves `public/about.html` (and similarly for other pages)

## Build & Start

```bash
npm run build && npm run start
```

## Notes
- All original static files live under `public/`.
- Middleware rewrites clean routes to the corresponding `.html` files.
