import { getDocs, wrapError } from '../../shared';
import { DebtDoc } from '../interfaces';

const DB_NAME = 'debts';

export const getDebts = async (id = 'debt') => {
    try {
        return await getDocs<DebtDoc>(DB_NAME, id);
    } catch (error) {
        throw wrapError(error, 'getDebts');
    }
};
