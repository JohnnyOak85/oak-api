import { calculateTotal } from './calculators';
import PaymentEntryDoc from './PaymentEntryDoc.interface';
import { getAll } from '../../storage/storage';
import { logError } from '../logger';

type Reoccurrence = 'debt' | 'monthly' | 'sporadic' | 'weekly';

interface PaymentHistory {
    amount: number;
    date: number;
}

export interface ExpenseDoc extends PaymentEntryDoc {
    lastUpdate: number;
    payDate: number;
    reoccurrence: Reoccurrence; // TODO Deal with this.
    history: PaymentHistory[];
}

const DB_NAME = 'expenses';

export const getExpenses = async (id = 'expense') => {
    try {
        const expenses = await getAll<ExpenseDoc>(DB_NAME, id);

        return {
            expenses,
            expensesTotal: calculateTotal(expenses.map(expense => expense.amount))
        };
    } catch (error) {
        logError(error, 'getExpenses');
        throw error;
    }
};
