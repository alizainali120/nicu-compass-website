// server.js (Simplified express.static)

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import mimeTypes from 'mime-types'; // No longer needed for this approach

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory
// Express should automatically handle MIME types for .js files.
app.use(express.static(path.join(__dirname, 'dist')));

// This catch-all route handles client-side routing
app.get(/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});