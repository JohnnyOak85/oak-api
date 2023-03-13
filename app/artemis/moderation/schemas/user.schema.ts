import Joi from 'joi';

export const UserSchema = Joi.object().keys({
    _id: Joi.string(),
    _rev: Joi.string(),
    id: Joi.string(),
    nickname: Joi.string(),
    roles: Joi.array().items(Joi.string()),
    warnings: Joi.array().items(Joi.string())
});
