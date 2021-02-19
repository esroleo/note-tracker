// ** midleware decalation for routes *** //
const router = require('express').Router();

//const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');

//console.log(notes)

router.get('/notes', (req, res) => {
  res.json(notes);
  //res.send("Hello")
});

router.post('/notes', (req, res) => {
  // req.body is where our incoming content will be
  // lenght vs index.. lenght is +1 hence why the below works
  req.body.id = notes.length.toString();
  //console.log(req.body);

  const note = createNewNote(req.body, notes);
  res.json(note);
   
  // // if any data in req.body is incorrect, send 400 error back
  // if (!validateNote(req.body)) {
  //   res.status(400).send('The note is not properly formatted.');
  // } else {
  // // add animal to json file and animals array in this function
  // const note = createNewNote(req.body, animals);
  // res.json(note);
  // //res.json(req.body);
  // }
});



module.exports  = router;

