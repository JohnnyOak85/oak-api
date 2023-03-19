import { object, string } from '../../app/shared';

export const QuerySchema = {
    query: object().keys({
        id: string().description('Identification of the value to find.'),
        all: string().valid('true', 'false').description('Indicator for returning all documents.')
    })
};
