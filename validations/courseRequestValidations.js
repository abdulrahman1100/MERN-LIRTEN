const Joi = require('../node_modules/joi/lib')

module.exports = {
    createValidation: request => {
        const createSchema = {
            description:Joi.string().required(),
            category:Joi.string().required(),
            applyingMemberId:Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            description:Joi.string(),
            category:Joi.string(),
            active:Joi.boolean()
        }

        return Joi.validate(request, updateSchema)
    }, 
}