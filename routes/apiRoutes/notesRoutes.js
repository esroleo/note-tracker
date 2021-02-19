// ** midleware decalation for routes *** //
const router = require('express').Router();

//const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { notes } = require('../../db/db');

//console.log(notes)

router.get('/notes', (req, res) => {
  res.json(notes);
  //res.send("Hello")
});

module.exports  = router;



