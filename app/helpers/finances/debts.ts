import PaymentEntryDoc from './PaymentEntryDoc.interface';
import { getAll } from '../../storage/storage';
import { logError } from '../logger';

const DB_NAME = 'debts';

export interface DebtDoc extends PaymentEntryDoc {
    remainder: number;
}

export const getDebts = async (id = 'debt') => {
    try {
        return await getAll<DebtDoc>(DB_NAME, id);
    } catch (error) {
        logError(error, 'getDebts');
        throw error;
    }
};
