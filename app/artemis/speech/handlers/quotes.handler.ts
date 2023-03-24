import { wrapError } from '../../../shared';
import { getData } from '../../helpers';
import { QuotesDoc } from '../types';
import { DB_NAME } from '../shared';

export const getQuotes = async () => {
    try {
        const { quotes } = await getData<QuotesDoc>(DB_NAME, 'quotes');
        return quotes;
    } catch (error) {
        throw wrapError(error, 'getQuotes');
    }
};
