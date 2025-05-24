# Next.js Tutorial Project

A modern web application built with Next.js 15.

## 🚀 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Authentication:** Clerk
- **Database:** Vercel Postgres with Drizzle ORM
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **File Upload:** UploadThing
- **Monitoring:** Sentry
- **Analytics:** PostHog
- **Deployment:** Vercel

## 🛠️ Development

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm 10.9.2 or later

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server with Turbo
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run format:write` - Format code with Prettier

### Database Management

- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Drizzle Studio
- `npm run db:migrate` - Run database migrations

## 📁 Project Structure

```
src/
├── app/          # Next.js app directory (pages and layouts)
├── components/   # Reusable React components
├── lib/          # Library code and configurations
├── server/       # Server-side code
├── styles/       # Global styles and Tailwind config
└── utils/        # Utility functions
```

## 🔧 Configuration

The project uses several configuration files:

- `next.config.js` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `drizzle.config.ts` - Database ORM configuration
- `eslint.config.js` - ESLint configuration
- `prettier.config.js` - Prettier configuration
- `postcss.config.js` - PostCSS configuration

## 📝 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Add your environment variables here
# See src/env.js for required variables
```

## 🚀 Deployment

This project is configured for deployment on Vercel. The deployment process is automated through GitHub integration.
