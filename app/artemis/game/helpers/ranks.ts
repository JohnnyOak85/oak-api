import { ErrorHandler, StorageHandler } from '../../../tools';
import RanksDoc from '../interfaces/RanksDoc.interface';
import DB_NAME from '../shared/DB_NAME';
import { getCurrentArea } from './areas';

export const getRank = async () => {
    try {
        const ranks = await StorageHandler.get<RanksDoc>(DB_NAME, 'ranks');
        const currentArea = await getCurrentArea();

        if (!ranks[currentArea]) {
            throw ErrorHandler.notFound('Area is not set');
        }

        return ranks[currentArea];
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getRanks');
    }
};
