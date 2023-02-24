import storage from '../../../storage/storage';
import QuotesDoc from '../interfaces/QuotesDoc.interface';
import DB_NAME from '../shared/DB_NAME';
import ErrorHandler from '../../../tools/error';

export const getQuotes = async () => {
    try {
        const { quotes } = await storage.get<QuotesDoc>(DB_NAME, 'quotes');
        return quotes;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getQuotes');
    }
};
