# Smart Banquet

This project uses pnpm as the package manager for a React application built with TypeScript and Vite.

## Prerequisites

- Node.js (LTS version recommended)
- pnpm (install via `npm install -g pnpm`)

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Build for production:
```bash
pnpm build
```

## Project Structure

The project uses Vite with React and TypeScript, providing:
- Fast Refresh for development
- TypeScript support
- ESLint configuration for code quality
- Modern build tooling

## ESLint Configuration

The project uses a type-aware ESLint configuration:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## Dependencies

The project uses the following key dependencies:
- React
- TypeScript
- Vite
- ESLint with TypeScript support
