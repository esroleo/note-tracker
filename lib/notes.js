const fs = require("fs");
const path = require("path");

// npm uuid key generator
var KeyGenerator = require('uuid-key-generator');
 


// *** Validate nte note *** //
function validateNote(note) {
  if (!note.title || typeof note.name !== 'string') {
    return false;
  }
  if (!note.text || typeof note.species !== 'string') {
    return false;
  }
  return true;
}


// *** Create new note *** //
function createNewNote(body, notesArray) {
  // Body object assigned to variable note
  // notes Array is coming from the api routes which contain the db.json data
  const note = body;

  // *** Assign UUID Key Generator class to a variable to hold all key generator properites or functions
  var keygen = new KeyGenerator(); // Default is a 128-bit key encoded in base58
  //console.log(keygen.generateKey());
  //console.log("this id will be modified " + note.id);
  
  // *** Assign key to the created ID *** //
  body.id = keygen.generateKey();
  //console.log("The new note key is now " + note.id)

  notesArray.push(note);
  // our function's main code will go here!
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  // return finished code to post route for response
  return note;
}

// *** Function to handle query for a single animal return query *** //
function findById(id, notesArray) {
  
  const result = notesArray.filter(notes => notes.id === id)[0];
  return result;
  }

// *** Delete Note *** //

// *** Create new note *** //
function deleteNote(notesArray) {
  console.log(notesArray);
  //console.log(body);
  //const note = body;
  //notesArray.push(note);
  //our function's main code will go here!
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  // return finished code to post route for response
  //return note;
}


module.exports = {
  deleteNote,
  findById,
  createNewNote,
  validateNote
  };
