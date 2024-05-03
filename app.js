


//  Import library class, books class, audiobook class, movies class, music class

const { Book } = require("./Book");
const { Media } = require("./Media");
const { Library } = require("./library");


// create instances of classes

let lotr = new Book("fellowShip of the ring")
console.log(lotr)
console.log(lotr.name)

// lord of the rings as a instance of book class

// Do things with those instances


// create an instance of a library

// add media instances into library instance

let libraryInstance = new Library()
libraryInstance.books.push(lotr)

// log the data in the library
console.log(libraryInstance)
console.log(libraryInstance.books[0].name)