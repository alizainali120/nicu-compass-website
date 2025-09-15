# NICU Compass Website

## Overview
NICU Compass is a modern React TypeScript website providing support, information, and community for families with babies in the Neonatal Intensive Care Unit. The site offers resources, parent stories, and guidance for navigating the NICU experience with warm, calming pastel colors and a sophisticated yet homey design.

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
- React 18+ with TypeScript and modern ES modules
- Vite for development server and build tooling
- Tailwind CSS with PostCSS integration and custom warm pastel color palette
- Component-based architecture with React functional components
- Google Fonts (Inter) for typography
- Responsive design with mobile-first approach

## Development Setup
- **Server**: Vite dev server on port 5000
- **Host**: 0.0.0.0 (configured for Replit proxy)
- **Workflow**: "TypeScript Dev Server" with hot reload
- **Build**: TypeScript compilation + Vite bundling
- **Deployment**: Configured for autoscale deployment target

## Features
- Modern React component architecture with TypeScript
- Expandable resource cards with "Learn More" functionality
- Smooth animations and modern interactions
- Responsive design optimized for all devices
- Hero section with clear call-to-action
- Warm, calming messaging with parenting-focused content
- Misty blue color palette with soft slate and calming blue tones
- Developer experience with hot reload and type safety

## User Preferences
- **Design Style**: Modern and sophisticated yet homey and calming
- **Technology Choice**: React + TypeScript for familiar development experience
- **Color Palette**: Misty blue and soft slate colors for a calming, serene feel
- **Content Style**: Supportive parenting themes that feel like home
- **Interactions**: Expandable cards with smooth animations

## Recent Changes
- 2025-09-15: Complete conversion to React + TypeScript architecture
  - Successfully migrated from vanilla TypeScript class components to React functional components
  - Maintained all existing functionality (expandable cards, smooth scrolling, responsive design)
  - Implemented misty blue color palette with custom Tailwind theme
  - Created modern React component structure (Header.tsx, ResourceCard.tsx, App.tsx)
  - Updated entry point from main.ts to main.tsx with React rendering
  - Preserved all animations and interactions in React state management
  - Cleaned up old TypeScript class files while maintaining design integrity

## Notes
- Uses TypeScript for type safety and better development experience
- Tailwind CSS properly configured with PostCSS for production builds
- All components are class-based TypeScript modules
- Smooth scrolling and animations enhance user experience
- Content focuses on supportive, parent-centered messaging