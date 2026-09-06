# Dr. Annesa Ghosh — Product Portfolio

Plain HTML/CSS/JS site for GitHub Pages.

## What's fixed in this version

**Image transparency, properly this time.** The checkerboard leak on the resume-paper prop took a few attempts to actually pin down — turned out my protection box was 5-10px short of the paper's true edge on two sides. Fixed by measuring the actual boundary with a pixel grid and verifying with a direct alpha-channel check, not just a screenshot glance. All other transparent images (crab mascots, avatars) were re-verified clean too.

**Two layout overlaps fixed:**
- The 3-tag chip row (e.g. "B2B SAAS / TRUST LAYER / RELEASE PLANNING" on CodeTru) no longer collides with the faint background ordinal number — it now wraps a line earlier.
- The decorative crab mascot on featured case study cards no longer sits on top of the "Read case study" button text or the first tag chip. Moved both crab variants to the top corner (matching the style already used on the Aliko Health panel) instead of the bottom, since the bottom position is where the button lives. This overlap existed on the original live site too, not something introduced here — just never caught before.
- One minor accepted trade-off: the faint background ordinal number on featured cards is now mostly covered by the crab in that same corner. It's a subtle decorative number, not real content, so this reads fine rather than as a bug.

**"Performance marketing" now named explicitly.** Two spots previously said the more generic "growth marketing" — the Growth section headline and the Resume snapshot paragraph. Both now say "performance marketing," matching your actual Vedantu title and the specific metrics shown in that section (ROI, CAC).

## Resume link now auto-updates — here's how

The "View resume" and "Open resume" buttons no longer point to Google Drive. They now point to `assets/resume.pdf` — a file path inside this repo.

**What this means going forward:** whenever you have a new resume version, export it as a PDF, name it exactly `resume.pdf`, and upload it to the `assets/` folder on GitHub — replacing the old one. The link on the site never changes, so you never touch the HTML again. Just swap the file.

**One thing to do now:** there's no `resume.pdf` in this repo yet. Until you add one, those two buttons will 404. To add it:
1. On GitHub, navigate into the `assets` folder
2. "Add file" → "Upload files" → drag in your resume PDF
3. Before committing, click the filename field and rename it to exactly `resume.pdf` if it isn't already
4. Commit

To update it later: go to `assets/resume.pdf` in the repo, click the pencil/edit icon (or delete and re-upload with the same name), and commit. The live link stays the same.

## What's in here
- `index.html`, `styles.css`, `script.js` — the site
- `assets/` — all images, optimized (2.6MB total)
- `assets-extra/` — `laptop-avatar.png` and `pointing-avatar.png`, sent but not yet placed anywhere on the page. Say the word if you want either used somewhere.

## Pushing updates
You're uploading directly through GitHub's web interface, which works fine for a static site like this. For any file that already exists in the repo (like `styles.css` or `index.html`), you can either delete-and-reupload with the same name, or open the file on GitHub and use the pencil/edit icon to paste in the new content directly.
