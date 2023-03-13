import { getDocs, wrapError } from '../../shared';
import { calcTotal } from '../helpers';
import { ExpenseDoc } from '../interfaces';

const DB_NAME = 'expenses';

export const getExpenses = async (id = 'expense') => {
    try {
        const expenses = await getDocs<ExpenseDoc>(DB_NAME, id);

        return {
            expenses,
            expensesTotal: calcTotal(expenses.map(expense => expense.amount))
        };
    } catch (error) {
        throw wrapError(error, 'getExpenses');
    }
};
