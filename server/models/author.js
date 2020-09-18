const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number,
    // mongo will create an id
});

module.exports = mongoose.model('Author', authorSchema)