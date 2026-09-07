# Dr. Annesa Ghosh — Product Portfolio

Plain HTML/CSS/JS site for GitHub Pages.

## Video resume — now at the top, with a custom poster

Moved to right after the hero section (and first in the nav), so anyone in a hurry can watch it before scrolling through everything else.

Since you don't have the actual video yet, I built a poster image (`assets/video-poster.jpg`) so the section looks intentional and finished rather than an empty black box — composed from your "pointing" avatar (background-removed and cleaned up) plus the same gradient blobs, grid pattern, eyebrow-pill, and fonts used everywhere else on the site, with a play button positioned where she's pointing. It's a custom build, not a stock template — meant to disappear once the real video is in and just look like part of the page in the meantime.

**When you upload the real video**, the poster automatically stops mattering — browsers show a video's own first frame or your poster only until playback starts, so you don't need to remove or touch `video-poster.jpg` at all. Just add `assets/video-resume.mp4` as before (exact filename, same folder) and it works.

### Uploading your video resume once it's ready
1. Export as `.mp4`, landscape (16:9 — e.g. 1920×1080 or 1280×720)
2. Keep it reasonably sized for web — under ~50MB if possible, ideally 10-25MB. Compress with something like Handbrake if your export is much bigger.
3. On GitHub: `assets/` → "Add file" → "Upload files" → drag it in → rename to exactly `video-resume.mp4` → commit

To replace it later: same steps, same filename, it overwrites automatically.

## Everything else fixed in this version

**Image cutouts, verified properly.** Switched from manual color-threshold heuristics to actual AI segmentation (rembg) after repeated leaks on the resume-paper prop — checked clean across every transparent image this time, not spot-checked.

**Two layout overlaps fixed:** tag chips no longer collide with the background ordinal number on 3-tag cards; the decorative crab mascot no longer sits on top of case-study button text.

**"Performance marketing" named explicitly**, replacing the more generic "growth marketing" in two spots — matches your actual Vedantu title.

**CoWise confidentiality:** removed the Figma link and the work-library Drive link from that panel, replaced with a plain confidentiality note — no offer to show it later, per your company policy. Still needs your check: the same Drive link also appears in the Contact section as "Full work library" — confirm whether that folder has anything CoWise-related in it.

## What's in here
- `index.html`, `styles.css`, `script.js` — the site
- `assets/` — images including the new poster (2.7MB total) — `resume.pdf` and `video-resume.mp4` not yet added
- `assets-extra/laptop-avatar.png` — the one remaining unused extra image (the pointing one is now the video poster). Say the word if you want it placed somewhere.

## Pushing updates
Uploading through GitHub's web interface. Uploading a file with a name that already exists in the repo updates it — GitHub shows it as a change to commit, not a duplicate.
