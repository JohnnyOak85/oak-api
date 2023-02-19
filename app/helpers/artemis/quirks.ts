import storage from '../../storage/storage';
import log from '../../tools/log';
import QuirkDoc from './interfaces/QuirksDoc.interface';
import DB_NAME from './shared/DB_NAME';

export const getQuirks = async () => {
    try {
        const { quirks } = await storage.get<QuirkDoc>(DB_NAME, 'quirks');
        return quirks;
    } catch (error) {
        log.error(error, 'getQuirks');
        throw error;
    }
};
