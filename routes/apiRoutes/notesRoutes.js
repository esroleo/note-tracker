// *** Router will be used as part of express to help modularization of the api routes which will be used by server.js

// ** midleware decalation for routes *** //
const router = require('express').Router();

// *** Use ../../lib/notes.js to hold all the functions necessary to work the code of noteRoutes.js
const { createNewNote, deleteNote } = require('../../lib/notes');

// *** notes will hold all the db.json data
const { notes } = require('../../db/db');

// *** Reply with all notes 
router.get('/notes', (req, res) => {
  res.json(notes);

});

// *** Create a new note post fetch originated from client facing applicatoin
router.post('/notes', (req, res) => {

  // *** Placeholder ID creation to modify the body with one more element before "real" key is assigned.
  req.body.id = notes.length.toString();
 
  // *** note will hold the reply of the new array of notes --> JSON.stringify({ notes: notesArray }, null, 2)
  const note = createNewNote(req.body, notes);
  // *** respond with the json note for client facing application to complete the delete of the element from the front end.
  res.json(note);
   
});

// *** delete a new note post fetch originated from client facing applicatoin 
router.delete('/notes/:id', function (req, res) {
  
  // code logic to delete json element link below
  // https://www.codota.com/code/javascript/functions/express/Express/delete
  //  id will hold the paramater passed by the front end to delete and map to the new projectIndex.
  const { id } = req.params;
  const projectIndex = notes.findIndex(notes => notes.id == id);
  notes.splice(projectIndex, 1);
  // *** Function deleteNote will receive the new body of "notes" which does not include the object (the object was deleted)
  deleteNote(notes);
  // *** If the clien facing wanted to show a display of confirmation, they could use the below
  // *** FYI - the below res.send only sends back a string.
  return res.send("Item Deleted!");

})

// export route to be used by index.js of the apiRoutes functionality

module.exports  = router;

