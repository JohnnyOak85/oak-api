import { wrapError } from '../../../shared';
import { calcTotal, getData } from '../helpers';
import { ExpenseDoc } from '../interfaces';

const DB_NAME = 'expenses';

export const getExpenses = async (id = 'expense') => {
    try {
        const expenses = await getData<ExpenseDoc[]>(DB_NAME, id, true);

        return {
            expenses,
            expensesTotal: calcTotal(expenses.map(expense => expense.amount))
        };
    } catch (error) {
        throw wrapError(error, 'getExpenses');
    }
};
