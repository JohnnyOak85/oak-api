import { getDoc, wrapError } from '../../../shared';
import { QuotesDoc } from '../interfaces';
import { DB_NAME } from '../shared';

export const getQuotes = async () => {
    try {
        const { quotes } = await getDoc<QuotesDoc>(DB_NAME, 'quotes');
        return quotes;
    } catch (error) {
        throw wrapError(error, 'getQuotes');
    }
};
