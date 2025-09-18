# Dependency Versions - Research Results

## Research Findings

### Core Runtime
- **Node.js**: v22.x (Current LTS, Active until October 2025, Maintenance until April 2027)

### Core Framework & Libraries
- **Next.js**: 15.5.0 (Latest stable as of September 2025)
- **React**: 19.0.0 (Current stable, released December 2024)
- **React DOM**: 19.0.0 (Match React version)

### Language & Tools
- **TypeScript**: 5.9.2 (Latest stable as of September 2025)

### Styling (v4.1+ REQUIRED)
- **Tailwind CSS**: 4.1.0 (Latest stable, meets v4.1+ requirement)
- **@tailwindcss/postcss**: 4.1.0 (Match Tailwind version)
- **PostCSS**: 8.5.1 (Latest stable)
- **Autoprefixer**: 10.4.20 (Latest stable)

### Development Dependencies
- **@types/node**: 22.9.0 (Match Node.js 22.x LTS)
- **@types/react**: 19.0.0 (Match React 19.x)
- **@types/react-dom**: 19.0.0 (Match React DOM 19.x)
- **ESLint**: 9.18.0 (Latest stable)
- **eslint-config-next**: 15.5.3 (Latest stable)
- **Prettier**: 3.3.3 (Latest stable)

### Additional Dependencies
- **next-seo**: 6.6.0 (Latest stable)
- **lucide-react**: 0.468.0 (Latest stable)
- **gray-matter**: 4.0.3 (Latest stable)

## Installation Commands
Update these with researched versions:

```bash
# Core dependencies
pnpm add next@15.5.0 react@19.0.0 react-dom@19.0.0 typescript@5.9.2

# Styling dependencies
pnpm add tailwindcss@4.1.0 @tailwindcss/postcss@4.1.0 postcss@8.5.1 autoprefixer@10.4.20

# Development dependencies
pnpm add -D @types/node@22.9.0 @types/react@19.0.0 @types/react-dom@19.0.0 eslint@9.18.0 eslint-config-next@15.5.3 prettier@3.3.3

# Additional dependencies
pnpm add next-seo@6.6.0 lucide-react@0.468.0 gray-matter@4.0.3
```

## Critical Notes
- Use EXACT researched versions - NO SUBSTITUTIONS
- Tailwind CSS MUST be v4.1.0 or higher per project requirements ✅ SATISFIED
- All versions researched on: September 18, 2025