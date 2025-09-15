# NICU Compass Website

## Overview
NICU Compass is a modern TypeScript website providing support, information, and community for families with babies in the Neonatal Intensive Care Unit. The site offers resources, parent stories, and guidance for navigating the NICU experience with a clean, modern design inspired by sites like Figma, Stripe, and Typeform.

## Project Structure
- `src/` - TypeScript source code
  - `main.ts` - Main application entry point
  - `components/` - Reusable UI components (Header, ResourceCard)
  - `data/` - Static data files and content
  - `types/` - TypeScript type definitions
  - `style.css` - Global styles with Tailwind imports
- `index.html` - HTML template and app container
- `package.json` - Node.js dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Technology Stack
- TypeScript with modern ES modules
- Vite for development server and build tooling
- Tailwind CSS with PostCSS integration
- Component-based architecture with TypeScript classes
- Google Fonts (Inter) for typography
- Responsive design with mobile-first approach

## Development Setup
- **Server**: Vite dev server on port 5000
- **Host**: 0.0.0.0 (configured for Replit proxy)
- **Workflow**: "TypeScript Dev Server" with hot reload
- **Build**: TypeScript compilation + Vite bundling
- **Deployment**: Configured for autoscale deployment target

## Features
- Modern component-based architecture with TypeScript
- Expandable resource cards with "Learn More" functionality
- Smooth animations and modern interactions
- Responsive design optimized for all devices
- Hero section with clear call-to-action
- Subtle parenting-focused messaging throughout
- Clean, accessible design with blue/gray color palette
- Developer experience with hot reload and type safety

## User Preferences
- **Design Style**: Modern and clean, inspired by Figma/Stripe/Typeform
- **Technology Choice**: TypeScript for better development experience
- **Content Style**: Subtle parenting themes without being overwhelming
- **Interactions**: Expandable cards with smooth animations

## Recent Changes
- 2025-09-15: Complete migration to TypeScript/Vite architecture
  - Migrated from static HTML to modern TypeScript setup
  - Created component-based architecture with Header and ResourceCard classes
  - Implemented expandable resource cards with smooth animations
  - Added modern design with simplified blue/gray color palette
  - Integrated Tailwind CSS with PostCSS for production-ready styling
  - Set up Vite development server with hot reload
  - Added subtle parenting themes throughout the content

## Notes
- Uses TypeScript for type safety and better development experience
- Tailwind CSS properly configured with PostCSS for production builds
- All components are class-based TypeScript modules
- Smooth scrolling and animations enhance user experience
- Content focuses on supportive, parent-centered messaging