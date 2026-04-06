# Development Commands

This document outlines all available commands for developing CAARA.

## Quick Reference

| Command              | Purpose                                  |
| -------------------- | ---------------------------------------- |
| `bun run dev`        | Start development server with hot reload |
| `bun run build`      | Compile TypeScript to JavaScript         |
| `bun run lint`       | Run ESLint                               |
| `bun run format`     | Format with Prettier                     |
| `bun run test`       | Run tests                                |
| `bun run prisma:dev` | Run migrations in development            |

## Server

### Development Server

```bash
bun run dev
```

Starts the development server with hot module reloading. The server will restart automatically when you make changes.

### Production Build

```bash
bun run build
```

Compiles TypeScript to JavaScript and generates optimized production builds.

### Preview Production Build

```bash
bun run preview
```

Creates and runs a production build locally for testing.

## Code Quality

### Linting

```bash
bun run lint
```

Runs ESLint on all TypeScript files to check for code style issues and potential errors.

### Fix Linting Issues

```bash
bun run lint:fix
```

Automatically fixes auto-fixable linting issues.

### Code Formatting

```bash
bun run format
```

Formats all code using Prettier according to project style guidelines.

### Type Checking

```bash
bun run type-check
```

Runs TypeScript compiler in check-only mode to verify type correctness without generating files.

## Database Management

### Development Migrations

```bash
bun run prisma:dev
```

Runs Prisma migrations in development mode. Creates migrations from schema changes and applies them to the database.

### Production Migrations

```bash
bun run prisma:deploy
```

Applies existing migrations to production database. Use this in CI/CD pipelines.

### Reset Database

```bash
bun run prisma:reset
```

Drops the database, recreates it, and reruns all migrations. **Warning: This deletes all data**. Only use in development.

### Prisma Studio

```bash
bun run prisma:studio
```

Opens Prisma Studio GUI in your browser for visual database management and data inspection.

## Testing

### Run Tests

```bash
bun run test
```

Runs the complete test suite once.

### Watch Mode

```bash
bun run test:watch
```

Runs tests in watch mode, automatically rerunning when files change.

### Coverage Report

```bash
bun run test:coverage
```

Generates a code coverage report showing which lines are tested.

## Combined Workflows

### Before Committing

```bash
bun run lint:fix
bun run format
bun run type-check
bun run test
```

This sequence ensures code quality before committing.

### Full Development Setup

```bash
bun install
bun run prisma migrate dev
bun run dev
```

This sets up the project, initializes the database, and starts the development server.

### Pre-Production Checklist

```bash
bun run lint
bun run type-check
bun run test
bun run build
bun run preview
```

Verifies everything is ready for production deployment.

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, change it in your `.env`:

```env
PORT=3001
```

### Database Connection Issues

Verify your `DATABASE_URL` in `.env`:

```bash
psql postgresql://user:password@localhost:5432/caara
```

### Docker Development

Build and run with Docker:

```bash
docker build -t caara .
docker run -p 3000:3000 caara
```

### Clearing Cache

If you encounter strange build issues:

```bash
rm -rf node_modules
rm -rf dist
bun install
bun run build
```
