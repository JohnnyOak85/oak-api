import { number, object } from '../../../shared';

export const WageSchema = {
    query: object().keys({
        benefit: number().allow('').description('Extra non-taxable wage'),
        meal: number().allow('').description('The daily meal wage paid'),
        wage: number().required().description('The year gross wage')
    })
};
