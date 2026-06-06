# Content Lab — by Akshay Iyer

A public-facing A/B testing and content experiment dashboard documenting real experiments run across a 90K+ creator audience on Instagram and TikTok.

---

## Stack

- **Next.js 14** — App Router, static export
- **Tailwind CSS** — custom dark design system
- **Framer Motion** — scroll-driven animations, stagger effects
- **Zero backend** — all data hardcoded in `app/data/experiments.ts`
- **Zero env variables** — deploy immediately, no config needed

---

## Local Development

```bash
cd content-lab
npm install
npm run dev
# → http://localhost:3000
```

---

## Deploy to Vercel (Free, 60 seconds)

### Option 1 — Vercel CLI

```bash
npm install -g vercel
cd content-lab
vercel
```

Follow the prompts. No environment variables needed.

### Option 2 — Vercel Dashboard

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → click **Deploy**

---

## Project Structure

```
content-lab/
├── app/
│   ├── components/
│   │   ├── Nav.tsx                   # Sticky nav with scroll blur
│   │   ├── Hero.tsx                  # Animated hero + marquee + stat cards
│   │   ├── KeyFindings.tsx           # 2×2 insight card grid
│   │   ├── ExperimentTracker.tsx     # Filterable expandable experiment cards
│   │   ├── PerformanceDashboard.tsx  # Count-up stat cards
│   │   ├── GrowthFormula.tsx         # Horizontal flow diagram
│   │   ├── WhatsNext.tsx             # Planned experiment cards
│   │   └── Footer.tsx                # Links + availability banner
│   ├── data/
│   │   └── experiments.ts            # All experiment data (edit here)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── tailwind.config.ts
└── next.config.mjs
```

---

## Adding New Experiments

Edit `app/data/experiments.ts` — add an object to the `experiments` array:

```ts
{
  id: 'exp-005',
  number: '005',
  title: 'Your experiment title',
  platform: 'Instagram',      // 'Instagram' | 'TikTok' | 'Both'
  date: '2025',
  status: 'COMPLETED',        // 'COMPLETED' | 'RUNNING' | 'PLANNED'
  winner: 'VARIANT WON',      // 'VARIANT WON' | 'CONTROL WON' | 'INCONCLUSIVE'
  hypothesis: '...',
  variableTested: '...',
  controlDesc: '...',
  variantDesc: '...',
  result: '...',
  keyLearning: '...',
  whatNext: '...',
  metrics: [
    { label: 'Views', control: '10,000', variant: '100,000' },
    { label: 'Reach', value: '90%+' },
  ],
}
```

No other changes needed — the UI renders automatically.

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#0a0a0f` |
| Primary (purple) | `#6c47ff` |
| Secondary (orange) | `#ff5c1a` |
| Text | `#f0ede8` |
| Muted | `#888888` |
| Display font | Poppins 900 |
| Data font | DM Mono |

---

Built by **Akshay Iyer** · [Instagram](https://www.instagram.com/akshayiyer/) · [TikTok](https://www.tiktok.com/@akshayiyerdrums) · akshay.iyer10@gmail.com
