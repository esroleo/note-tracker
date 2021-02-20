// *** Import path and router libraries
// *** Path will be used for ease of directory structure assignment
// *** Router will be used as part of express to help modularization of the api routes which will be used by server.js

const path = require('path');
const router = require('express').Router();

// *** Server send ./public/index.html back to the client *** // 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
/// *** Serve route to the notes.html  *** //
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Export this routes to be used by serer.js main script
  
module.exports = router;