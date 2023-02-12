import PaymentEntryDoc from './PaymentEntryDoc.interface';
import storage from '../../storage/storage';
import logger from '../logger';

const DB_NAME = 'debts';

export interface DebtDoc extends PaymentEntryDoc {
    remainder: number;
}

export const getDebts = async (id = 'debt') => {
    try {
        return await storage.getAll<DebtDoc>(DB_NAME, id);
    } catch (error) {
        logger.logError(error, 'getDebts');
        throw error;
    }
};
