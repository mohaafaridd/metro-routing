// @ts-check
require('dotenv').config();
const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Define the path to the Vite build directory
const buildPath = path.join(process.cwd(), '..', 'app', 'dist');
const public = path.join(process.cwd(), '..', 'app', 'public');

// Serve static files from the Vite build directory
app.use(express.static(public));
app.use(express.static(buildPath));

// Fallback to `index.html` for SPA routing
app.get('*', (req, res) => {
  res.redirect(301, '/');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
