import { getData, logInfo, wrapError } from '../../../shared';
import { QuirkDoc } from '../types';
import { DB_NAME } from '../shared';

export const getQuirks = async () => {
    try {
        logInfo('artemis:speech', 'Getting speech quirks');

        const { quirks } = await getData<QuirkDoc>(DB_NAME, 'quirks');
        return quirks;
    } catch (error) {
        throw wrapError(error, 'getQuirks');
    }
};
