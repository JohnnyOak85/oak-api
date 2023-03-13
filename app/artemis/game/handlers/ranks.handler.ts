import { getCurrentArea } from '.';
import { getDoc, notFound, wrapError } from '../../../shared';
import { RanksDoc } from '../interfaces';
import { DB_NAME } from '../shared';

export const getRank = async () => {
    try {
        const ranks = await getDoc<RanksDoc>(DB_NAME, 'ranks');
        const currentArea = await getCurrentArea();

        if (!ranks[currentArea]) {
            throw notFound('Area is not set');
        }

        return ranks[currentArea];
    } catch (error) {
        throw wrapError(error, 'getRanks');
    }
};
