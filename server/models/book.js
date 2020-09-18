const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
    // mongo will create an id
});

module.exports = mongoose.model('Book', bookSchema)