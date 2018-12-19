const { validateQuery, validateParams, schemas } = require('../schemas/routeSchemas');
const Controllers = require('../controllers/controllers');
const CONST = require('../constants');

const Router = require('express').Router();

Router.route(CONST.MOVIES).get(Controllers.movies);

Router.route(CONST.SORT).get(validateQuery(schemas.sortSchema), Controllers.sort);

Router.route(CONST.NAME).get(validateParams(schemas.nameSchema), Controllers.findByName);

Router.route(CONST.ID).get(validateParams(schemas.idSchema), Controllers.findById);

module.exports = Router;