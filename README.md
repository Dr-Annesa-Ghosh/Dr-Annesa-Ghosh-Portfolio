# Dr. Annesa Ghosh — Product Portfolio

Plain HTML/CSS/JS site for GitHub Pages. Same design system, layout, and copy as the original — plus the confirmed content fixes and a new Tools & Skills section. All real images are in place.

## What's in here
- `index.html` — all page content
- `styles.css` — the full design system (colors, fonts, layout, cards)
- `script.js` — scroll-spy nav + fade-in animations on scroll
- `assets/` — final images, optimized for web (2.9MB total, down from 17MB+ as originally uploaded)
- `assets-extra/` — two images you sent that aren't used on the page yet (see below)

## What I did to your uploaded images
Your original files had the transparent areas baked in as a visible checkerboard (flattened PNGs, no real alpha channel) rather than true transparency. I rebuilt proper transparency for each one, resized them to sensible web dimensions, and converted the one fully-opaque image (`hero-avatar`) to JPEG since it didn't need transparency — that alone cut it from 1.7MB to 174KB. Total page weight dropped from ~17MB to under 3MB, which matters for load time once this is live.

One image (`resume-contact-avatar.png`, the blank paper prop) needed a manual fix — the paper and the background were nearly identical shades of white with no clean edge between them, so automatic background removal ate part of the paper. Fixed with a protected region so the paper stays fully solid.

## Two extra images, not yet used
`assets-extra/laptop-avatar.png` (you with a laptop) and `assets-extra/pointing-avatar.png` (you pointing, human version rather than the crab) aren't wired into any section right now — there wasn't an obvious slot for them in the current layout. Let me know if you want either one worked in somewhere (the Skills section or Prewise/CoWise panel could both suit the laptop image, for instance) and I'll place it properly.

## What changed from the original live site
- Removed two unverified stats (25% enrolment increase, 20% retention improvement) — kept the four confirmed ones
- Hero copy broadened from "product management candidate" to "product and growth professional," to fit PM, Product Marketing, and Growth titles equally
- Growth section headline reframed as a current strength rather than "before product" history
- Case studies reordered to lead with AI/support-automation work
- "Recipe Discovery — GTM" capstone promoted to first position (it's the clearest positioning/GTM artifact)
- Hasta & Co added as a featured entry in "Current build work" (wasn't on the site before)
- New "Tools & Skills" section added between Capstones and Growth
- Favicon regenerated from the real CherryClonk artwork

## Pushing to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then in the repo's Settings → Pages, set source to the `main` branch, root folder. It'll be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.
