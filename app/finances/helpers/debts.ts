import { DebtDoc } from '../interfaces';
import { ErrorHandler, StorageHandler } from '../../tools';

const DB_NAME = 'debts';

export const getDebts = async (id = 'debt') => {
    try {
        return await StorageHandler.getAll<DebtDoc>(DB_NAME, id);
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getDebts');
    }
};
