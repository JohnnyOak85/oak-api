import Joi from 'joi';
import { notAcceptable } from '../../app/shared';

export const QuerySchema = {
    query: Joi.object().keys({
        key: Joi.string()
            .required()
            .description('Key of the value to find.')
            .error(notAcceptable('Need key parameter'))
    })
};
