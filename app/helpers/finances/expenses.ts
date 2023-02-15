import { calculateTotal } from './tools/calculators';
import storage from '../../storage/storage';
import log from '../../tools/log';
import { ExpenseDoc } from './interfaces';

const DB_NAME = 'expenses';

export const getExpenses = async (id = 'expense') => {
    try {
        const expenses = await storage.getAll<ExpenseDoc>(DB_NAME, id);

        return {
            expenses,
            expensesTotal: calculateTotal(expenses.map(expense => expense.amount))
        };
    } catch (error) {
        log.error(error, 'getExpenses');
        throw error;
    }
};
