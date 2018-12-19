require('../services/db');
const films = require('../movies');


module.exports = {
    movies: (req, res) => {
        res.send(films);
    },

    sort: (req, res) => {
        res.send(sortdb(films, req.query));
    },

    findByName: (req, res) => {
        res.send(findByName(films, req.params.name));
    },

    findById: (req, res) => {
        res.send(findById(films, req.params.id));
    },

    pagination: (req, res) => {
        res.send(pagination(films, req.query));
    }
};