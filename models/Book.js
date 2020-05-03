const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    imageLink: {
        type: String
    },
    description: {
        type: String
    },
    bookLink: {
        type: String
    },
    bookId: {
        type: String
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

