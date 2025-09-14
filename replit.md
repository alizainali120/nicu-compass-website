# NICU Compass Website

## Overview
NICU Compass is a static HTML website providing support, information, and community for families with babies in the Neonatal Intensive Care Unit. The site offers resources, parent stories, and guidance for navigating the NICU experience.

## Project Structure
- `index.html` - Main website file with complete single-page application
- `CNAME` - Domain configuration for www.nicucompass.com
- `README.md` - Basic project documentation
- `.replit` - Replit configuration with web module

## Technology Stack
- Static HTML/CSS/JavaScript
- Tailwind CSS (via CDN) for styling
- Google Fonts (Inter) for typography
- Responsive design with mobile-first approach

## Development Setup
- **Server**: Python HTTP server on port 5000
- **Host**: 0.0.0.0 (configured for Replit proxy)
- **Workflow**: "Static Website Server" automatically serves the site
- **Deployment**: Configured for autoscale deployment target

## Features
- Responsive design optimized for all devices
- Hero section with clear call-to-action
- Mission statement and resource cards
- Community connection and support section
- Clean, accessible design with medical industry appropriate colors

## Recent Changes
- 2025-09-14: Initial Replit environment setup
  - Configured Python HTTP server for static file serving
  - Set up workflow for automatic server startup
  - Configured deployment for production hosting
  - Verified website functionality and responsive design

## Notes
- Website uses Tailwind CSS CDN (development warning appears in console but doesn't affect functionality)
- No favicon.ico file present (causes harmless 404 in logs)
- All external dependencies are loaded via CDN
- No build process required - pure static HTML