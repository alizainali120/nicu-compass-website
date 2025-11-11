// server.js (Simplified setHeaders)

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mimeTypes from 'mime-types'; // Make sure this is installed: npm install mime-types

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    // Let mime-types handle all files
    const mimeType = mimeTypes.lookup(filePath);
    
    // Explicitly set 'text/javascript' for JavaScript files if it's detected as 'application/javascript' or something else
    // Browsers require 'text/javascript' or 'application/javascript' for modules.
    if (filePath.endsWith('.js') || filePath.endsWith('.mjs')) {
        res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
        return;
    }

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