import { wrapError } from '../../../shared';
import { getData } from '../../helpers';
import { QuirkDoc } from '../types';
import { DB_NAME } from '../shared';

export const getQuirks = async () => {
    try {
        const { quirks } = await getData<QuirkDoc>(DB_NAME, 'quirks');
        return quirks;
    } catch (error) {
        throw wrapError(error, 'getQuirks');
    }
};
