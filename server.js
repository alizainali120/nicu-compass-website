// server.js

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    // Handle JavaScript modules
    if (filePath.endsWith('.js') || filePath.endsWith('.mjs')) {
      // Check if it's a module (Vite adds ?v= query param for modules)
      if (filePath.includes('?v=') || filePath.includes('assets/')) {
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      } else {
        res.setHeader('Content-Type', 'application/javascript');
      }
    }
  }
}));

// This catch-all route handles client-side routing
app.get(/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});