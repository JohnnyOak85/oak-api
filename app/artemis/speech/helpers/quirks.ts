import storage from '../../../storage/storage';
import QuirkDoc from '../interfaces/QuirksDoc.interface';
import DB_NAME from '../shared/DB_NAME';
import ErrorHandler from '../../../tools/error';

export const getQuirks = async () => {
    try {
        const { quirks } = await storage.get<QuirkDoc>(DB_NAME, 'quirks');
        return quirks;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getQuirks');
    }
};
