import storage from '../../storage/storage';
import log from '../../tools/log';
import { DebtDoc } from './interfaces';

const DB_NAME = 'debts';

export const getDebts = async (id = 'debt') => {
    try {
        return await storage.getAll<DebtDoc>(DB_NAME, id);
    } catch (error) {
        log.error(error, 'getDebts');
        throw error;
    }
};
