const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paginator = require('mongoose-paginate');

const JokeSchema = new Schema({
    content: String
});

JokeSchema.plugin(paginator);

module.exports = mongoose.model('joke', JokeSchema);