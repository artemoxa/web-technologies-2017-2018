const Film = require('../database/database');


module.exports = {
    movies: (req, res) => {
        Film.findAll()
        .then(movies => {
            res.send(movies);
        })
        .catch(error => {
            console.log(error);
        });
    },

    sort: (req, res) => {
        res.send(req.query);
    },

    findByName: (req, res) => {
        Film.find({ where: { title: req.params.name} })
        .then(film => {
            res.send(film);
        })
        .catch(error => {
            console.log(error);
        });
    },

    findById: (req, res) => {
        Film.find({ where: { id: req.params.id} })
        .then(film => {
            res.send(film);
        })
        .catch(error => {
            console.log(error);
        });
    }
};