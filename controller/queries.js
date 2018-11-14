const Joke = require('../model/joke');

module.exports = {
    findAll: (req, res) => {
        Joke.paginate({}, {page: req.params.page, limit: 10})
            .then((item) => {
                res
                .status(200)
                .json(item);
            }, (rejection) => {
                res
                .status(rejection.status)
                .json(rejection);
            })
    },
    findSpecific: (req, res) => {
        Joke.findById(req.query.id, (err, res) => {
            if (err) throw err;

            res
            .status(200)
            .json(res);
        });
    }
};