const Joi = require('../node_modules/joi/lib')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(2).required(),
                }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(2),
          
        }

        return Joi.validate(request, updateSchema)
    }, 
}