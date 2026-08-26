# AADYA ENT & CARDIAC CLINIC Website

A premium multi-page healthcare website for **AADYA ENT & CARDIAC CLINIC** — a real ENT & Cardiology clinic located in Dehradun, Uttarakhand, India.

## Overview

Built using **HTML5**, **CSS3**, and **Vanilla JavaScript** — no frameworks, no build tools, no backend dependencies. All pages run by simply opening them in any modern browser.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, About, Departments, Doctors, Why Choose Us, Clinic gallery, reel, contact |
| ENT | `ent.html` | ENT hero, services (Nasal Endoscopy, Audiometry, Sinus & Throat Care, Microsurgery), gallery, CTA |
| Cardiac | `cardiac.html` | Cardiac hero, services (Heart Health Checks, ECG, Hypertension Management, Cardiac Management), equipment grid, CTA |
| Media | `media.html` | Health camps gallery (lightbox) and doctor reels (9:16 cards) |

All pages share `style.css` and `script.js`, with a consistent sticky header and deep-blue footer.

## Features

- **Premium healthcare design** — professional, clean, modern, and trustworthy
- **Fully responsive** — single-line desktop navigation, hamburger mobile menu, mobile bottom bar (Call Clinic + WhatsApp)
- **Call Clinic first** — every primary CTA dials the clinic via `tel:`; QR
- **WhatsApp secondary** — shown only when an official number is configured
- **Accessibility-first** — semantic HTML, keyboard navigation, ARIA labels, `prefers-reduced-motion`
- **SEO optimized** — per-page titles/meta, Open Graph, MedicalClinic structured data
- **Image fallback system** — polished placeholders instead of broken image icons
- **Gallery lightbox** — full-screen image viewer with prev/next, keyboard support, per-page groups
- **Reel modal** — local MP4 playback plus Instagram/YouTube link support
- **Scroll reveal animations** — subtle entrance animations
- **Active navigation** — current page highlighted, homepage scroll-spy for Why Choose Us / Contact

## Central Configuration

All clinic details are defined in `script.js` as a central configuration object:

```javascript
const CLINIC = {
    name: "AADYA ENT & CARDIAC CLINIC",
    phone: "ADD_PHONE_NUMBER",
    whatsapp: "",               // add digits only (no +) to enable WhatsApp
    email: "ADD_EMAIL",
    address: "Mothorowala Rd, Bengali Kothi, Tehri Nagar, Dehradun, Uttarakhand, India",
    timings: "ADD_CLINIC_TIMINGS",
    googleMaps: "ADD_GOOGLE_MAPS_LINK"
};
```

While the phone is `"ADD_PHONE_NUMBER"`, clicking any Call Clinic button shows a toast: "Clinic phone number will be added soon." Until a WhatsApp number is added, the WhatsApp button is hidden.

## Placeholder Guide

| Placeholder | Location | Replace With |
|-------------|----------|--------------|
| `ADD_PHONE_NUMBER` | Header CTA, contact, footer, `CLINIC.phone` | Actual clinic phone number |
| `whatsapp` (empty) | `script.js` `CLINIC.whatsapp` | Official WhatsApp number (digits only, no +) |
| `ADD_EMAIL` | Contact, footer, `CLINIC.email` | Clinic email address |
| `ADD_CLINIC_TIMINGS` | `CLINIC.timings` | "Mon-Sat: 9:00 AM - 6:00 PM" |
| `ADD_GOOGLE_MAPS_LINK` | `CLINIC.googleMaps` | Google Maps URL |
| `ADD CLINIC / HOSPITAL IMAGE` | Hero fallback | `assets/clinic/hero.jpg` |
| Hero clinic image | Hero right column + floating card | `assets/clinic/hero.jpg` (until provided, the `ADD CLINIC / HOSPITAL IMAGE` placeholder shows) |
| `ADD CLINIC IMAGE` | About, gallery | `assets/clinic/about.jpg`, exterior/reception/waiting-area/consultation-room |
| `ADD ENT CLINIC / EQUIPMENT IMAGE` | ENT hero | `assets/ent/ent-main.jpg` |
| `ADD ENT IMAGE`, `ADD ENT EQUIPMENT IMAGE`, `ADD ENT PROCEDURE IMAGE`, `ADD ENT ROOM IMAGE` | ENT gallery | `assets/ent/` gallery images |
| `ADD CARDIAC IMAGE` | Cardiac hero | `assets/cardiac/cardiac-main.jpg` |
| `ADD ECG MACHINE IMAGE`, `ADD CARDIAC EQUIPMENT IMAGE`, `ADD DIAGNOSTIC MACHINE IMAGE`, `ADD MONITORING EQUIPMENT IMAGE` | Cardiac equipment | `assets/cardiac/` images |
| `Equipment Name` + "Add verified equipment information here." | Cardiac equipment names | Verified machine names/specs |
| `ADD CAMP IMAGE` | Media camps gallery | `assets/camps/camp-1.jpg` ... `camp-6.jpg` |
| `ADD REEL` / `ADD_REEL_1..6` | Reel cards, `data-reel-src` | Local MP4 paths or Instagram/YouTube URLs |
| Home reels | Home `#reel` | 4 Instagram reel embeds (`data-reel-embed`) auto-cycling in `reel-carousel` (driven by `initReelCarousel()` in script.js). Swap the `/reel/<ID>/embed/` URLs to update |
| `ADD DR. NK BELWAL PHOTO` | Doctors | `assets/doctors/dr-nk-belwal.jpg` |
| `ADD CHANDRA MOHAN BELWAL PHOTO` | Doctors | `assets/doctors/chandra-mohan-belwal.jpg` |

## File Structure

```
/
├── index.html
├── ent.html
├── cardiac.html
├── media.html
├── style.css
├── script.js
├── assets/
│   ├── logo/
│   ├── clinic/            hero, about, exterior, reception, waiting-area, consultation-room
│   ├── doctors/           dr-nk-belwal.jpg, chandra-mohan-belwal.jpg
│   ├── ent/               ent-main.jpg + 4 gallery images
│   ├── cardiac/           cardiac-main.jpg, ecg.jpg, machine-1.jpg, machine-2.jpg, equipment.jpg
│   ├── camps/             camp-1.jpg ... camp-6.jpg
│   ├── media/             (optional media files)
│   └── reels/             home-reel.mp4, home-reel.jpg, reel-1..3 posters + videos
└── README.md
```

## JavaScript Functionality

1. Mobile hamburger menu toggle
2. Active navigation (per-page + homepage scroll-spy)
3. `callClinic()` with placeholder guard and toast
4. WhatsApp booking (secondary, hidden without a number)
5. Generic lightbox with prev/next and keyboard support
6. Reel modal for local MP4 + Instagram/YouTube external links
7. Image fallback system (missing images become styled placeholders)
8. Video fallback system (missing video reveals placeholder, never a broken player)
9. Scroll reveal animations (Intersection Observer)
10. Back-to-top button

## Color Palette

| Variable | Color | Usage |
|----------|-------|-------|
| Cardiac Red | `#E30613` | Primary CTAs, cardiac accents |
| Deep Blue | `#1B2A72` | Navbar, headings, footer, primary gradient |
| Medical Cyan | `#29A9E0` | Secondary accents, gradient |
| Dark Text | `#050505` | Body text |
| White | `#FFFFFF` | Cards, clean sections |
| Light Background | `#F8FAFC` | Section backgrounds |

## Typography

- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

## Running Locally

1. Download or copy this project
2. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge)
3. No server or build step required

## Content Safety

This is a real medical website. No phone numbers, WhatsApp numbers, medical qualifications, experience figures, statistics, reviews, ratings, success rates, emergency services, opening hours, email addresses, social media handles, or machine specifications are invented. All missing information uses clearly marked placeholders.

## License

© 2026 AADYA ENT & CARDIAC CLINIC. All Rights Reserved.