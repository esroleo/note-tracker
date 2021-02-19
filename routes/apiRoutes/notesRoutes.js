// ** midleware decalation for routes *** //

const router = require('express').Router();

//const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { filterByQuery } = require('../../lib/notes');
//const { db } = require('../../data/db.json');
const { notes } = require('../../db/db');

//console.log(notes)

router.get('/notes', (req, res) => {
  res.json(notes);
  //res.send("Hello")
});


  // // // // *** Route added*** Return all animals //
  // router.get('/notes', (req, res) => {
  //   //res.send('Hello!');
  //   let results = dbData; //store all json data from our our animals.json
  //   // console.log(req.query)
  //   // res.json(results);
  //   //res.json(animals);
  //   if (req.query) {
  //       results = filterByQuery(req.query, results);
  //     }
  //     res.json(results);
  // });



  module.exports  = router;



