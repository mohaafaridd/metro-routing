const express = require('express');
const indexRoutes = require('./server/routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api', indexRoutes);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
