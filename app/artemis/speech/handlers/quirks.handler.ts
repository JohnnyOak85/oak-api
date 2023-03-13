import { getDoc, wrapError } from '../../../shared';
import { QuirkDoc } from '../interfaces';
import { DB_NAME } from '../shared';

export const getQuirks = async () => {
    try {
        const { quirks } = await getDoc<QuirkDoc>(DB_NAME, 'quirks');
        return quirks;
    } catch (error) {
        throw wrapError(error, 'getQuirks');
    }
};
