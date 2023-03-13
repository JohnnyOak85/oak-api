import Joi from 'joi';

export const UserIdSchema = Joi.object().keys({
    userId: Joi.string()
});
