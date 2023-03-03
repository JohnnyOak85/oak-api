import Calculator from '../tools/calculators';
import { ExpenseDoc } from '../interfaces';
import { ErrorHandler, StorageHandler } from '../../tools';

const DB_NAME = 'expenses';

export const getExpenses = async (id = 'expense') => {
    try {
        const expenses = await StorageHandler.getAll<ExpenseDoc>(DB_NAME, id);

        return {
            expenses,
            expensesTotal: Calculator.total(expenses.map(expense => expense.amount))
        };
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getExpenses');
    }
};
