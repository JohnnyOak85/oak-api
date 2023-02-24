import { calculateTotal } from '../tools/calculators';
import storage from '../../storage/storage';
import { ExpenseDoc } from '../interfaces';
import ErrorHandler from '../../tools/error';

const DB_NAME = 'expenses';

export const getExpenses = async (id = 'expense') => {
    try {
        const expenses = await storage.getAll<ExpenseDoc>(DB_NAME, id);

        return {
            expenses,
            expensesTotal: calculateTotal(expenses.map(expense => expense.amount))
        };
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getExpenses');
    }
};
