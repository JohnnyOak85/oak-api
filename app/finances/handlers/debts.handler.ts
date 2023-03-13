import { getDocs, ServerRequest, ServerResponse, wrapError } from '../../shared';
import { DebtDoc } from '../interfaces';

const DB_NAME = 'debts';

export const getDebts = async (id = 'debt') => {
    try {
        return await getDocs<DebtDoc>(DB_NAME, id);
    } catch (error) {
        throw wrapError(error, 'getDebts');
    }
};

export const getDebtsHandler = async (request: ServerRequest, h: ServerResponse) => {
    try {
        return h.response(await getDebts());
    } catch (error) {
        throw wrapError(error, 'getDebtsHandler');
    }
};
