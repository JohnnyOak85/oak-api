import Joi from 'joi';

export const AreaSchema = Joi.object().keys({
    currentArea: Joi.string().required().description('The code for a valid game area.')
});
