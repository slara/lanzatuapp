# CLAUDE.md - AI Assistant Guide for lanzatu.app

## Project Overview

**lanzatu.app** is a Spanish-language landing page for an MVP development service targeting non-technical founders in Latin America. Built on the Radiant template (Tailwind Plus), it's a static Next.js site deployed to GitHub Pages.

### Business Context
- Service: MVP development in 3 weeks for $1,200-$3,500 USD
- Target audience: Non-technical founders who want to launch products
- Brand: ModoAutomatico
- Contact: WhatsApp (+56993289547), email (seba@modoautomatico.app)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.4.10 | React framework (static export) |
| React | 19 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Styling |
| Headless UI | 2.x | Accessible UI components |
| Framer Motion | 12.x | Animations |
| Three.js | 0.182 | 3D globe animation |
| Lucide React | Icons |
| clsx | Class name utility |

## Project Structure

```
lanzatuapp/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout (metadata, fonts)
│   │   ├── page.tsx        # Main landing page (all sections)
│   │   └── favicon.ico
│   ├── components/
│   │   ├── lanzatu-*.tsx   # Custom components for this site
│   │   └── *.tsx           # Reusable UI components
│   └── styles/
│       └── tailwind.css    # Tailwind config with custom theme
├── public/                  # Static assets (images, SVGs)
├── .github/workflows/
│   └── nextjs.yml          # GitHub Pages deployment
└── .claude/
    └── settings.local.json # Claude Code permissions
```

## Key Files

- **`src/app/page.tsx`**: Contains all landing page sections (Hero, TrustBadges, Problem, Process, Deliverables, Craftsmanship, Pricing, FAQ, Contact)
- **`src/app/layout.tsx`**: Site metadata, Switzer font, Spanish language config
- **`src/components/lanzatu-navbar.tsx`**: Navigation with mobile menu (uses Headless UI Disclosure)
- **`src/components/lanzatu-footer.tsx`**: Footer with social links
- **`src/components/globe-background.tsx`**: Three.js animated globe with rockets
- **`src/components/faq-accordion.tsx`**: FAQ section with Framer Motion animations

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build

# Run linter
npm run lint

# Start production server (local testing)
npm start
```

## Code Conventions

### Styling
- Use Tailwind CSS classes exclusively (no custom CSS except in `tailwind.css`)
- Color scheme: emerald-500/600 for primary, gray scale for neutrals
- Use `clsx()` for conditional class names
- Responsive: mobile-first with `sm:`, `lg:` breakpoints

### Components
- Functional components with TypeScript
- Props typed inline or with interfaces
- Use `'use client'` directive for client-side components (animations, interactions)
- Import order: external packages first, then local components

### Formatting
- Single quotes
- No semicolons
- Prettier with `prettier-plugin-organize-imports` and `prettier-plugin-tailwindcss`

### ESLint Rules
- Next.js core-web-vitals + TypeScript
- `@next/next/no-img-element`: off
- `prefer-const`: off

## Component Patterns

### Button Variants
```tsx
// Use the Button component with variants
<Button variant="primary">...</Button>  // Dark bg, white text
<Button variant="secondary">...</Button> // White bg, ring
<Button variant="outline">...</Button>   // Transparent, ring
```

### Container Pattern
```tsx
// Always wrap sections with Container for consistent max-width
<Container>
  <div className="mx-auto max-w-2xl text-center">...</div>
</Container>
```

### Link Component
```tsx
// Use Link from '@/components/link' (wraps Next.js Link with Headless UI)
import { Link } from '@/components/link'
```

### Section Structure
```tsx
function SectionName() {
  return (
    <section id="section-id" className="scroll-mt-16 py-16 sm:py-24">
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-emerald-600">Subtitle</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Title
          </h2>
        </div>
        {/* Section content */}
      </Container>
    </section>
  )
}
```

## Important Notes

### Static Export
The site uses `output: 'export'` in `next.config.mjs` for GitHub Pages deployment. This means:
- No server-side features (API routes, server actions)
- All pages are pre-rendered at build time
- Dynamic routes require `generateStaticParams()`

### Deployment
- Automatic deployment to GitHub Pages on push to `main` branch
- Uses `.github/workflows/nextjs.yml`
- Build output goes to `./out` directory

### Sanity CMS (Optional)
The template includes Sanity dependencies for blog functionality, but the current site doesn't use it. If enabling:
1. Create Sanity project: `npm create sanity@^4.2 -- --env=.env.local --create-project "Radiant Blog" --dataset production`
2. Import seed data: `npx sanity@^4.2 dataset import seed.tar.gz`
3. Access studio at `/studio`

### Language
All user-facing content is in **Spanish**. Keep text in Spanish when making changes.

## Common Tasks

### Adding a New Section
1. Create section function in `src/app/page.tsx`
2. Add section ID for navigation linking
3. Add `scroll-mt-16` class for smooth scroll offset
4. Import and render in `Home` component

### Updating Contact Information
- WhatsApp number: Update in `Hero`, `LanzatuNavbar`, and `Contact` sections
- Email: Update in `Contact` section
- The WhatsApp URL format: `https://wa.me/PHONENUMBER?text=MESSAGE`

### Modifying Pricing Plans
Plans are defined in the `Pricing` function with this structure:
```tsx
const plans: Plan[] = [
  {
    name: 'Plan Name',
    description: 'Short description',
    price: '$X,XXX',
    includesPrevious: boolean,
    previousPlan: 'Previous Plan Name',
    features: [{ text: 'Feature', icon: IconComponent, highlight?: boolean }],
    cta: 'CTA Button Text',
    highlighted: boolean,
  },
]
```

### Adding Icons
Use Lucide React for icons:
```tsx
import { IconName } from 'lucide-react'
<IconName className="size-5 text-emerald-500" />
```

### Animations
Use Framer Motion for animations:
```tsx
'use client'
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
>
  ...
</motion.div>
```

## Path Aliases

TypeScript paths configured in `tsconfig.json`:
```
@/* -> ./src/*
```

Example: `import { Container } from '@/components/container'`
