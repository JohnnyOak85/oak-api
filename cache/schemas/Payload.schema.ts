import Joi from 'joi';
import { notAcceptable } from '../../app/shared';

export const PayloadSchema = {
    payload: Joi.object()
        .keys({
            key: Joi.string()
                .required()
                .description('Key of the value to find or store.')
                .error(notAcceptable('Need key parameter')),
            value: Joi.string()
                .required()
                .description('Value to store.')
                .error(notAcceptable('Need value parameter'))
        })
        .error(notAcceptable('Need {key,value} payload'))
};
