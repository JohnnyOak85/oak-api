import { getData, wrapError } from '../../../shared';
import { DebtDoc } from '../interfaces';

const DB_NAME = 'debts';

export const getDebts = async (id = 'debt') => {
    try {
        return await getData<DebtDoc[]>(DB_NAME, id, true);
    } catch (error) {
        throw wrapError(error, 'getDebts');
    }
};
