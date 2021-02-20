// ** midleware decalation for routes *** //
const router = require('express').Router();

//const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { createNewNote, validateNote, findById, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

//console.log(notes)

router.get('/notes', (req, res) => {
  res.json(notes);
  //res.send("Hello")
});

router.post('/notes', (req, res) => {
  // req.body is where our incoming content will be
  // *** lenght vs index.. lenght is +1 hence why the below works
  // UUI here, create a note with a unique key in the create new id function
  req.body.id = notes.length.toString();
  // console.log(req.body);
  const note = createNewNote(req.body, notes);
  res.json(note);
   

});

router.delete('/notes/:id', function (req, res) {

  // https://www.codota.com/code/javascript/functions/express/Express/delete
  const { id } = req.params;
  const projectIndex = notes.findIndex(notes => notes.id == id);
  notes.splice(projectIndex, 1);
  deleteNote(notes);
  // deleteiTem (notes)
  //console.log(res.send())
  return res.send("Item Deleted!");

})

module.exports  = router;

