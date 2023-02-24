import storage from '../../storage/storage';
import { DebtDoc } from '../interfaces';
import ErrorHandler from '../../tools/error';

const DB_NAME = 'debts';

export const getDebts = async (id = 'debt') => {
    try {
        return await storage.getAll<DebtDoc>(DB_NAME, id);
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getDebts');
    }
};
