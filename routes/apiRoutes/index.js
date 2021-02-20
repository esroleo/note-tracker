// *** Router will be used as part of express to help modularization of the api routes which will be used by server.js
// *** Index.html inside api routes will be used as the landing router page for notesRoutes.js functionality

const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notesRoutes');

// *** Tell the router to go to ../apiRoutes/notesRoutes for further logic. Once that is completed export it to server.js
router.use(notesRoutes);

// Export this routes to be used by serer.js main script
module.exports = router;

