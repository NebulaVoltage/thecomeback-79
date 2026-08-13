# Shreehith Sai Vodapally — Engineering Portfolio

A high-performance, cinematic engineering portfolio built with React, Vite, and Vanilla CSS. Designed around a locked full-screen cinematic video hero for an editorial, technical visual experience.

## Technical Architecture & Overview

- **Hero Composition**: Viewport-matched full-screen background video (`100svh`) with a dark overlay, overlaying lightweight typography (`Manrope`), interactive navigation, and metadata labels.
- **Electronics & Software Synergy**: Explores the convergence of Electronics & Communication Engineering (ECE), Embedded Systems, Digital Signal Processing (DSP), Data Structures & Algorithms (DSA), and AI/ML.
- **Theme Switcher**: Supports persistent Dark (primary) and Light themes using `localStorage`.
- **Live GitHub Integration**: Fetches public repositories from `@NebulaVoltage` via GitHub REST API with graceful fallback data handling.
- **Interactive Project Filtering**: Filters engineering projects by domain tags (`SOFTWARE`, `ECE`, `EMBEDDED`, `AI / ML`, `DSP`, `DSA`).
- **Contact & Accessibility**: Validated contact form, keyboard navigation focus indicators, and `prefers-reduced-motion` compliance.

---

## Tech Stack

- **Framework**: React 19 (Vite 8)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid, Keyframe Animations)
- **Icons**: Lucide React + Inline SVGs
- **Deployment**: Vercel & Netlify ready

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/NebulaVoltage/thecomeback-79.git

# Navigate into project directory
cd thecomeback-79

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Production Build & Verification

```bash
# Run production build
npm run build

# Run linter
npm run lint
```

Output directory: `dist/`

---

## Deployment Configuration

- **Vercel**: Pre-configured via [`vercel.json`](./vercel.json) with SPA rewrites to `/index.html`.
- **Netlify**: Pre-configured via [`netlify.toml`](./netlify.toml) with build command `npm run build` and publish directory `dist`.

---

## Developer Links

- **GitHub**: [https://github.com/NebulaVoltage](https://github.com/NebulaVoltage)
- **LinkedIn**: [https://www.linkedin.com/in/shreehith-vodapally-68796b378/](https://www.linkedin.com/in/shreehith-vodapally-68796b378/)

---

© 2026 Shreehith Sai Vodapally. All rights reserved.
