# Mindspring — Child Development Center Website

A single-page, scroll-based marketing site on TanStack Start + Tailwind v4, with a sticky nav, calming blue design system, and all content sections from the brief.

## Design system (src/styles.css)

- Palette tokens (oklch equivalents of brief hexes):
  - `--primary` deep navy ≈ #1E3A8A
  - `--primary-glow` royal blue ≈ #2563EB
  - `--accent` sky blue ≈ #60A5FA
  - `--background` white, `--muted` soft grey (#F1F5F9-ish), `--foreground` slate-900
- Gradients: `--gradient-hero` (navy → royal → sky), `--gradient-soft` (white → sky-tint) for section backdrops.
- Shadows: `--shadow-soft` and `--shadow-card` for rounded cards.
- Radius bumped to ~1rem for rounded, friendly cards.
- Fonts: Inter (body) + Poppins (display) loaded via `<link>` in `src/routes/__root.tsx` (per Tailwind v4 rule — no remote `@import`), exposed as `--font-sans` and `--font-display` in `@theme`.
- Subtle scroll-reveal via an `IntersectionObserver` hook adding a `data-visible` attribute → CSS fade/translate transition (no extra deps).

## Route & SEO

- Replace placeholder `src/routes/index.tsx` with the full landing page.
- `head()`: title "Mindspring — Child Development Center in Ghaziabad", meta description with target keywords ("early intervention therapy", "speech therapy", "occupational therapy", "child development center Ghaziabad"), og:title/description/type=website, og:url + canonical = `/`.
- Single H1 in hero, semantic `<section>` per block with `aria-labelledby`, alt text on all imagery.
- JSON-LD `LocalBusiness` / `ChildCare` script in `scripts[]` with name, address, phone, geo, URL.
- Update root `head()` in `src/routes/__root.tsx` to set Mindspring defaults and add the Inter+Poppins `<link rel="stylesheet">` tags.

## Page sections (top → bottom)

```text
<StickyNav>            logo • About • Services • Who We Help • Enrichment • Contact • [Get in Touch]
<Hero>                 H1 + mission subtext + "Book a Consultation" CTA + hero image
<GoldenWindow>         "First 2,000 Days" copy + stat callouts (1M+/sec, 2,000 days)
<EarlyIntervention>    intro + 5-card service grid (Speech, OT, ABA, Special Ed, Sensory Integration)
<WhoWeHelp>            6 category cards/tag groups (Neurodivergence, Communication, Learning, Sensory & Motor, Emotional, Development)
<Enrichment>           ABGs section + 4 enhancement bullets
<ParentsPartners>      two-column: For Parents | For Preschool Partners
<Contact>              headline + form + contact details + WhatsApp & Call Now buttons + embedded Google Map iframe
<Footer>               logo, tagline, quick links, contact, © Mindspring
```

Each section is its own component file under `src/components/mindspring/` (Nav, Hero, GoldenWindow, EarlyIntervention, WhoWeHelp, Enrichment, ParentsPartners, Contact, Footer) so files stay small and focused.

## Components & UX details

- Reuse shadcn `Button`, `Card`, `Input`, `Textarea`, `Label`, `Badge`. No custom color classes — only semantic tokens.
- Nav: sticky, blurred white background on scroll, mobile hamburger via `Sheet`. Links use in-page hash anchors with smooth scroll (acceptable per guidelines: this is a single-page site where anchors ARE the primary nav by user request).
- Service cards: rounded-2xl, soft shadow, lucide icon in a tinted circle, hover lift.
- Stat callouts: large display-font numerals with sky-blue underline accent.
- Contact form: client-side validation only (no backend in scope); on submit, show a success toast via existing `sonner`. Form fields: name, email, phone, message. We do not persist — message explains we'll respond by phone/email.
- WhatsApp button: `https://wa.me/919971996493`. Call Now: `tel:+919971996493`.
- Google Map: simple `<iframe>` embed using the address query (no API key needed).

## Imagery

Generate 2 hero/section images with `imagegen` (fast tier, .jpg, saved to `src/assets/`):
1. `mindspring-hero.jpg` — warm, candid photo of a happy preschool-age child engaged in play-based learning with a kind therapist, soft natural light, blue/white palette.
2. `mindspring-enrichment.jpg` — children doing brain-gym style coordination activity, bright airy classroom.

Imported as ES modules into the relevant components.

## Accessibility & responsiveness

- WCAG AA contrast: navy on white, white on navy verified.
- Mobile-first: grids collapse to single column < `md`, nav becomes drawer < `md`.
- Multi-item header rows use the `grid-cols-[minmax(0,1fr)_auto]` → `sm:flex` pattern per the responsive-layout rule.
- All interactive elements keyboard-focusable with visible focus rings (default shadcn ring).

## Out of scope (call out, don't build)

- No backend / database / email delivery for the contact form (would need Lovable Cloud).
- No CMS — content is hardcoded from the brief.

If you'd like form submissions emailed or stored, say the word and I'll add Lovable Cloud + a server function in a follow-up.
