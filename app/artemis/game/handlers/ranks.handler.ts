import { getCurrentArea } from '.';
import { logInfo, notFound, wrapError } from '../../../shared';
import { getData } from '../../helpers';
import { RanksDoc } from '../types';
import { DB_NAME } from '../shared';

export const getRank = async () => {
    try {
        logInfo('artemis:game', 'Getting current area ranks');

        const ranks = await getData<RanksDoc>(DB_NAME, 'ranks');
        const currentArea = await getCurrentArea();

        if (!ranks[currentArea]) {
            throw notFound('Area is not set');
        }

        return ranks[currentArea];
    } catch (error) {
        throw wrapError(error, 'getRanks');
    }
};
