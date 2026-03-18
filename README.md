# Punts & Pints

Landing page for the **Punts & Pints** podcast by [Founders and Funders](https://foundersandfunders.com), based in Oxford. Collects waitlist signups and guest recommendations ahead of Season 1.

## Tech Stack

- **Framework:** Next.js 16 / React 19
- **Styling:** Tailwind CSS 4
- **Database:** Neon PostgreSQL via Drizzle ORM
- **Auth:** Clerk
- **Linting/Formatting:** Biome
- **Runtime:** bun

## Getting Started

### Prerequisites

- [bun](https://bun.sh/) installed
- A [Neon](https://neon.tech/) PostgreSQL database
- A [Clerk](https://clerk.com/) project

### Environment Variables

Create a `.env.local` file:

```
DATABASE_URL=your_neon_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### Install & Run

```bash
bun install
bun run db:generate
bun run db:migrate
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start dev server |
| `bun run build` | Production build |
| `bun run start` | Start production server |
| `bun run lint` | Run Biome checks |
| `bun run format` | Auto-format with Biome |
| `bun run db:generate` | Generate Drizzle migrations |
| `bun run db:migrate` | Run migrations |
| `bun run db:push` | Push schema directly (skip migrations) |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Landing page
│   ├── actions.ts        # Server actions (waitlist, guest recs)
│   └── globals.css       # Global styles & animations
├── components/
│   ├── waitlist-form.tsx          # Email signup form
│   ├── recommend-guest-modal.tsx  # Guest recommendation modal
│   ├── water-animation.tsx        # Animated wave background
│   └── ui/                        # Shared UI components
└── db/
    ├── index.ts          # Drizzle client
    └── schema.ts         # Table definitions
```

## Database

Two tables managed by Drizzle:

- **waitlist** — email signups (deduplicated)
- **speaker_recommendations** — guest suggestions with name, reason, and submitter email
