# Shreehith Sai Vodapally — Developer & Systems Engineering Portfolio

> **Deploython 2.0 Hackathon Entry**  
> A high-performance, dark cinematic personal developer portfolio built for **Shreehith Sai Vodapally** (Electronics and Communication Engineering student & software developer).

---

## 🚀 Overview & Design Concept

This portfolio embodies the intersection of **ELECTRONICS × SOFTWARE × INTELLIGENCE**. Designed with a sophisticated dark cinematic visual language (`#050505`), geometric typography (`Manrope`), thin borders, dynamic glassmorphic navigation, and live API integrations.

### Key Competition Highlights & Features
- 🎬 **Cinematic Video Hero**: Video background with staggered entrance typography (`cubic-bezier(.22, 1, .36, 1)`) and custom abstract `S/bolt` SVG branding.
- ⚡ **Interactive Architecture Flow**: `SIGNAL → COMPUTE → CODE → SYSTEM` interactive progression tracking hardware to software.
- 🛠️ **Categorized Toolset**: Typographic skills display across Software, Data Structures & Algorithms, AI/ML, Electronics & Embedded Systems, and Engineering Tools.
- 📊 **Interactive Project Gallery & Modal Detail Views**: Project filtering across 7 categories (ALL, SOFTWARE, ECE, EMBEDDED, AI/ML, DSP, DSA) with deep-dive technical modals.
- 🐙 **Live GitHub API Integration**: Real-time repo fetching from `@NebulaVoltage` with local caching, loading skeleton, and error fallback.
- 🌙 **Dark / Light Theme Switcher**: Genuine theme state persistence saved in `localStorage`.
- 📬 **Working Contact Form UI**: Client-side validation, email format checking, loading/success states, and configurable API endpoint support.
- 📄 **Resume Download Ready**: Integrated `/resume.pdf` download trigger.
- 🎯 **Custom Desktop Cursor**: Non-intrusive interactive dot/ring cursor with context actions (`VIEW`, `OPEN`).
- ♿ **Accessible & Responsive**: Fully tested across desktop (1440px+), laptop (1024px), tablet (768px), and mobile (360px–430px) viewports with `prefers-reduced-motion` support.

---

## 🛠️ Tech Stack

- **Core Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS Variables (Vanilla CSS design system)
- **Icons**: Lucide React
- **Typography**: Google Fonts — *Manrope* (400, 500, 600, 700, 800) & *JetBrains Mono*
- **Deployment & Config**: Vercel (`vercel.json`), Netlify (`netlify.toml`)

---

## 📁 Project Structure

```
portfolio-hack/
├── public/
│   ├── favicon.svg             # Custom abstract S/bolt SVG icon
│   └── resume.pdf              # Resume download PDF asset
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Glassmorphic header & mobile drawer menu
│   │   ├── Hero.jsx            # Video background & hero content
│   │   ├── About.jsx           # Engineering narrative & architecture flow
│   │   ├── Skills.jsx          # Categorized toolset
│   │   ├── Projects.jsx        # Project gallery & category filtering
│   │   ├── ProjectModal.jsx    # Technical deep-dive detail modal
│   │   ├── SignalsToSystems.jsx# Dynamic engineering bus pipeline
│   │   ├── Journey.jsx         # Editorial journey timeline
│   │   ├── Education.jsx       # Academic foundation (ECE emphasis)
│   │   ├── Certifications.jsx  # Certifications structure & empty state
│   │   ├── GitHubActivity.jsx  # Live API fetch from NebulaVoltage
│   │   ├── Contact.jsx         # Working contact form & direct social links
│   │   ├── Footer.jsx          # Minimal precision footer
│   │   ├── CustomCursor.jsx    # Interactive desktop cursor
│   │   └── ThemeToggle.jsx     # Dark/Light theme switcher
│   ├── data/
│   │   ├── projectsData.js     # Structured projects dataset
│   │   └── skillsData.js       # Skills taxonomy dataset
│   ├── App.jsx                 # Main application layout
│   ├── index.css               # Global CSS variables & animations
│   └── main.jsx                # React entry point
├── index.html                  # SEO metadata, Open Graph & fonts
├── vite.config.js              # Vite bundler config
├── vercel.json                 # Vercel deployment routing
├── netlify.toml                # Netlify deployment routing
└── README.md                   # Hackathon documentation
```

---

## 💻 Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NebulaVoltage/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🔑 Environment Variables & Contact Form Configuration

Create a `.env` or `.env.local` file in the root directory if you want to connect a live form backend (e.g., Formspree, Web3Forms, or custom serverless function):

```env
# Optional Contact Form Submission Endpoint
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

*Note: If `VITE_CONTACT_FORM_ENDPOINT` is not provided, the contact form operates in a clean deployment-ready simulation mode.*

---

## 🌐 Deployment Instructions

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub (`https://github.com/NebulaVoltage/portfolio`).
2. Go to [Vercel Dashboard](https://vercel.com/new) and import your repository.
3. Keep default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploying to Netlify
1. Log in to [Netlify](https://app.netlify.com/).
2. Select **Add new site** > **Import an existing project**.
3. Link your GitHub repo.
4. Netlify will automatically detect `netlify.toml` settings (`npm run build` / `dist`). Click **Deploy**.

---

## 👤 Personal Information & Social Links

- **Name**: Shreehith Sai Vodapally
- **Department**: Electronics and Communication Engineering (ECE)
- **Professional Identity**: ECE student + software developer + electronics/embedded systems enthusiast + technology builder
- **GitHub**: [github.com/NebulaVoltage](https://github.com/NebulaVoltage)
- **LinkedIn**: [linkedin.com/in/shreehith-vodapally-68796b378/](https://www.linkedin.com/in/shreehith-vodapally-68796b378/)

---

## 📸 Screenshots

*(Add live screenshots of Cinematic Hero, Project Filters, and Dark/Light Mode after deployment)*

---

*Built with precision for Deploython 2.0 hackathon.*
