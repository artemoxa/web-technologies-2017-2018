const Film = require('../database/database');
const CONST = require('../constants');


module.exports = {
    movies: (req, res) => {
        Film.find().exec()
        .then(movies => {
            res.send(movies);
        })
        .catch(error => {
            console.log(error);
        });
    },

    sort: (req, res) => {
        Film.find().exec()
        .then(movies => {
            if(req.query.key === CONST.id || req.query.key === CONST.popularity){
                movies.sort((a, b) => {
                        return a[key] - b[key];
                });
            } else if (req.query.key === CONST.name || req.query.key === CONST.adult) {
                movies.sort((a, b) => {
                        if(a[key] < b[key][0]) return -1;
                        else if (a[key] > b[key][0]) return 1;
                        else return 0;
                });
            }
            if(req.query.order === CONST.dec) movies.reverse();
            res.send(movies);
        })
        .catch(error => {
            console.log(error);
        });
    },

    findByName: (req, res) => {
        Film.findOne({ title: req.params.name}).exec()
        .then(film => {
            res.send(film);
        })
        .catch(error => {
            console.log(error);
        });
    },

    findById: (req, res) => {
        Film.findOne({ id: req.params.id} ).exec()
        .then(film => {
            res.send(film);
        })
        .catch(error => {
            console.log(error);
        });
    }
};