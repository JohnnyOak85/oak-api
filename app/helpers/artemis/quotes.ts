import storage from '../../storage/storage';
import log from '../../tools/log';
import QuotesDoc from './interfaces/QuotesDoc.interface';
import DB_NAME from './shared/DB_NAME';

export const getQuotes = async () => {
    try {
        const { quotes } = await storage.get<QuotesDoc>(DB_NAME, 'quotes');
        return quotes;
    } catch (error) {
        log.error(error, 'getQuotes');
        throw error;
    }
};
