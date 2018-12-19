const Joi = require('joi');

module.exports = {
    validateQuery: schema => {
        return (req, res, next) => {
            const result = Joi.validate(req.query, schema);
            if(result.error){
                res.status(400).json(result.error);
            }
            else next();
        };
    },

    validateParams: schema => {
        return (req, res, next) => {
            const result = Joi.validate(req.params, schema);
            if(result.error){
                res.status(400).json(result.error);
            }
            else next();
        };
    },

    schemas: {
        sortSchema: Joi.object().keys({
            order: Joi.string().required(),
            key: Joi.string().required()
        }),

        nameSchema: Joi.object().keys({
            name: Joi.string().required()
        }),

        idSchema: Joi.object().keys({
            id: Joi.number().integer().min(601).required()
        }),

        pagSchema: Joi.object().keys({
            offset: Joi.number().integer().min(0).required(),
            limit: Joi.number().integer().min(1).max(20).required()
        })
    }
};