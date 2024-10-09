const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from the client/dist folder in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/dist')));

  // If no API routes are hit, send the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'));
  });
}

// Use API routes
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
