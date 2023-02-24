import QuotesDoc from '../interfaces/QuotesDoc.interface';
import DB_NAME from '../shared/DB_NAME';
import { ErrorHandler, Storage } from '../../../tools';

export const getQuotes = async () => {
    try {
        const { quotes } = await Storage.get<QuotesDoc>(DB_NAME, 'quotes');
        return quotes;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getQuotes');
    }
};
