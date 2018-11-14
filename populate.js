const jokes_array = require('./array');
const Joke = require('./model/joke');

module.exports = () => {
    Joke.insertMany(jokes_array, (err, docs) => {
        if (err) return err;

        console.log(docs);
    });
};