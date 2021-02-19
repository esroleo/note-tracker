const fs = require("fs");
const path = require("path");


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
  //console.log(body);
  const note = body;
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

module.exports = {
  //  filterByQuery
  findById,
  createNewNote,
  validateNote
  };
