// server.js

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mime from 'mime';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    if (!res.getHeader('Content-Type')) {
      const type = mime.getType(filePath);
      if (type) {
        res.setHeader('Content-Type', type);
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