# Jackson for Borough Assembly — Campaign Site

A bold, Gen Z-meets-civic-energy campaign website. Photo-heavy, editorial, and built to convert.

---

## File Structure

```
jackson-campaign/
├── index.html              ← Main site (all sections)
├── css/
│   ├── main.css            ← Design tokens, layout, all section styles
│   ├── components.css      ← Form styles + responsive breakpoints
│   └── animations.css      ← Keyframes + micro-interactions
├── js/
│   └── main.js             ← Nav, scroll reveals, form, lightbox
├── images/
│   └── [YOUR PHOTOS HERE]  ← See image list below
└── README.md
```

---

## Quick Start

1. Clone or download this repo
2. Replace all placeholder images (see list below)
3. Find & replace `[BRACKET]` placeholders with real content
4. Push to GitHub
5. Deploy via **Netlify**, **GitHub Pages**, or **Vercel** (all free)

---

## Images to Replace

Drop all photos into the `/images/` folder with these filenames:

### Hero Section
| File | Description |
|------|-------------|
| `hero-1.jpg` | Hero grid photo 1 |
| `hero-2.jpg` | Hero grid photo 2 |
| `hero-3.jpg` | Hero grid photo 3 (large, right column) |
| `hero-4.jpg` | Hero grid photo 4 |
| `hero-5.jpg` | Hero grid photo 5 |

**Tip:** Use high-energy campaign photos — candid moments, crowds, speaking events

### About Section
| File | Description |
|------|-------------|
| `jackson-portrait.jpg` | Main candidate portrait (featured) |
| `community-1.jpg` | Secondary stacked photo |
| `community-2.jpg` | Tertiary stacked photo |
| `about-1.jpg` | Photo row — community outreach |
| `about-2.jpg` | Photo row — town hall |
| `about-3.jpg` | Photo row — neighborhood event |
| `about-4.jpg` | Photo row — resident meeting |

### Endorsements
| File | Description |
|------|-------------|
| `endorser-1.jpg` | Featured endorser photo |
| `endorser-2.jpg` | Endorser 2 |
| `endorser-3.jpg` | Endorser 3 |
| `endorser-4.jpg` | Endorser 4 |
| `endorser-5.jpg` | Endorser 5 |

### Issues Section
| File | Description |
|------|-------------|
| `issue-housing.jpg` | Housing issue photo |
| `issue-safety.jpg` | Public safety issue photo |
| `issue-environment.jpg` | Environment issue photo |
| `issue-economy.jpg` | Economy issue photo |
| `collage-1.jpg` | Issues collage photo 1 |
| `collage-2.jpg` | Issues collage photo 2 |
| `collage-3.jpg` | Issues collage photo 3 |
| `collage-4.jpg` | Issues collage photo 4 |

### Vote Section
| File | Description |
|------|-------------|
| `vote-main.jpg` | Main voting/civic photo |
| `vote-2.jpg` | Secondary voting photo |

### Donate Section
| File | Description |
|------|-------------|
| `donate-bg.jpg` | Donation section background |

### Contact / Footer
| File | Description |
|------|-------------|
| `strip-1.jpg` | Footer strip photo 1 |
| `strip-2.jpg` | Footer strip photo 2 |
| `strip-3.jpg` | Footer strip photo 3 |
| `strip-4.jpg` | Footer strip photo 4 |

---

## Graphics / Artwork Placeholders

Look for elements with `class="graphic-placeholder"` — these are dashed-border boxes where you can:
- Replace the `background-image` CSS with your graphic
- Drop an `<img>` tag inside
- Use an SVG illustration or campaign art

Key graphic spots:
- **Round sticker spot** in About section (`.graphic-placeholder--sticker`)
- **Issues collage item C** — great for a designed graphic or poster
- **Vote section circle** — campaign mark or ballot graphic
- **Footer strip photo 3** — campaign art

---

## Content Placeholders to Replace

Search `index.html` for `[BRACKET]` items and replace:

| Placeholder | Replace With |
|-------------|-------------|
| `[Last Name]` | Jackson's surname |
| `[#]` | District number |
| `[X]` | Real numbers for stats |
| `[DATE]` | Election day date |
| `[REGISTRATION LINK]` | Voter registration URL |
| `[POLLING PLACE LINK]` | Polling locator URL |
| `[MAIL BALLOT LINK]` | Absentee ballot URL |
| `[EARLY VOTING LINK]` | Early voting info URL |
| `[DONATE LINK]` | ActBlue or donation platform URL |
| `[EMAIL]` | Campaign email address |
| `[PHONE]` | Campaign phone number |
| `[INSTAGRAM]` | Instagram profile URL |
| `[TWITTER]` | Twitter/X profile URL |
| `[FACEBOOK]` | Facebook page URL |
| `[TIKTOK]` | TikTok profile URL |

---

## Form Setup (Contact Form)

By default the form simulates a submission. To make it real:

### Option A — Netlify (easiest)
1. Add `netlify` attribute to the `<form>` tag:
   ```html
   <form class="contact-form" id="contactForm" netlify>
   ```
2. Deploy to Netlify — forms work automatically.

### Option B — Formspree
1. Sign up at formspree.io
2. Change form action:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```
3. Remove the JS form handler or keep it for UX.

---

## Customization

### Change Campaign Colors
Open `css/main.css` and edit the `:root` variables:
```css
--c-accent:   #d94f3a;   /* Main campaign color (currently red) */
--c-accent-2: #f5a623;   /* Secondary color (currently amber)   */
```

### Change Candidate Name
Find and replace `JACKSON` throughout `index.html`.

### Add More Issues
Copy an `.issue-block` div in `index.html` and update the content.

### Add More Endorsers
Copy an `.endorsement-card` div and update photo + quote.

---

## Deployment

### GitHub Pages
1. Push to a GitHub repo
2. Go to Settings → Pages → Deploy from branch `main` / `root`

### Netlify (recommended — free + forms)
1. Drag the folder to netlify.com/drop
2. Or connect your GitHub repo for auto-deploy

### Vercel
1. `npm i -g vercel` then `vercel` in the project folder

---

## Tech Stack

- Pure HTML5, CSS3, Vanilla JS — zero dependencies
- Google Fonts: Bebas Neue (display), Inter (body), Playfair Display (italic accent)
- No build step required

---

## Legal

Add required campaign finance disclosures in the footer and donate sections where marked. Consult your local campaign finance board for exact language requirements.

---

*Built for the campaign. Go win.*
