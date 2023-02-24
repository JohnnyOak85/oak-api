import { DebtDoc } from '../interfaces';
import { ErrorHandler, Storage } from '../../tools';

const DB_NAME = 'debts';

export const getDebts = async (id = 'debt') => {
    try {
        return await Storage.getAll<DebtDoc>(DB_NAME, id);
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getDebts');
    }
};
