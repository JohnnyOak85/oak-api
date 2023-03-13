import Joi from 'joi';

export const WageSchema = Joi.object().keys({
    benefit: Joi.number().allow('').description('Extra non-taxable wage'),
    meal: Joi.number().allow('').description('The daily meal wage paid'),
    wage: Joi.number().required().description('The year gross wage')
});
