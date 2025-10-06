// server.js

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mimeTypes from 'mime-types';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    // Handle JavaScript modules
    if (filePath.includes('assets/') && filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      return;
    }
    
    // Handle other files using proper MIME type detection
    const mimeType = mimeTypes.lookup(filePath);
    if (mimeType) {
      res.setHeader('Content-Type', `${mimeType}; charset=utf-8`);
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