import storage from '../../storage/storage';
import logger from '../logger';
import { DebtDoc } from './interfaces';

const DB_NAME = 'debts';

export const getDebts = async (id = 'debt') => {
    try {
        return await storage.getAll<DebtDoc>(DB_NAME, id);
    } catch (error) {
        logger.logError(error, 'getDebts');
        throw error;
    }
};
