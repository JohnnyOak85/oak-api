import Joi from 'joi';

export const array = () => Joi.array();
export const boolean = () => Joi.boolean();
export const number = () => Joi.number();
export const object = () => Joi.object();
export const string = () => Joi.string();
