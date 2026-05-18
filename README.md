# LMS Speakeasy

A full-featured Learning Management System built with Next.js 14, where teachers can create and sell courses and students can browse, purchase, and track their progress.

## Features

**Teacher**
- Create and manage courses with categories, descriptions, and cover images
- Add chapters with rich text content and video uploads via Mux
- Reorder chapters with drag & drop
- Publish/unpublish courses and individual chapters
- Analytics dashboard with revenue and sales overview

**Student**
- Browse and filter courses by category and title
- Purchase courses via Stripe
- Track chapter completion progress
- Video player powered by Mux

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Auth | Clerk |
| Database | MySQL + Prisma ORM |
| Video | Mux (upload + streaming) |
| Payments | Stripe |
| File Upload | UploadThing |
| UI | Shadcn/UI + Radix UI + Tailwind CSS |
| State | Zustand |
| Forms | React Hook Form + Zod |
| Tables | TanStack Table |
| DnD | @hello-pangea/dnd |

## Getting Started

```bash
pnpm install
cp .env.example .env
npx prisma db push
pnpm dev
```

### Environment variables

```env
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
```

## Database Schema

- `Course` — title, description, price, category, published status
- `Chapter` — content, video (Mux), free preview flag, order
- `Attachment` — course resources and files
- `UserProgress` — per-chapter completion tracking
- `Purchase` — course purchases per user
- `StripeCustomer` — Stripe customer mapping
