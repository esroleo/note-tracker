// *** Import express library for project usage
// *** import apiRoutes and htmlRoutes which will be used by server.js for routing 

const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// *** Use default port of Heroku *** //
const PORT = process.env.PORT || 3001;

// *** Initialize our express application *** //
const app = express();

// Create routes to serve any front-end asset *** //
app.use(express.static('public'));

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// Routing to our modular session
app.use('/api', apiRoutes); // index.html on each folder will be read first
app.use('/', htmlRoutes);  // index.html on each folder will be read first

// server listening function
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });


