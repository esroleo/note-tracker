const path = require('path');
const router = require('express').Router();


// *** Server send ./public/index.html back to the client *** // 
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
  /// *** Serve route to the animals.html  *** //
  /// *** /animals - intentional to keey page organized and expectation of data *** //
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });
  
module.exports = router;