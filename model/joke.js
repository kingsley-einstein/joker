const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JokeSchema = new Schema({
    content: String
});

module.exports = mongoose.model('joke', JokeSchema);