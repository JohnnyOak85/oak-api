import QuirkDoc from '../interfaces/QuirksDoc.interface';
import DB_NAME from '../shared/DB_NAME';
import { ErrorHandler, Storage } from '../../../tools';

export const getQuirks = async () => {
    try {
        const { quirks } = await Storage.get<QuirkDoc>(DB_NAME, 'quirks');
        return quirks;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getQuirks');
    }
};
