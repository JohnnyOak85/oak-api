import { getExpenses } from './expenses';
import Calculator from '../tools/calculators';
import { getDebts } from './debts';
import { Contributor, ContributorDoc } from '../interfaces';
import { ErrorHandler, StorageHandler } from '../../tools';

const DB_NAME = 'contributors';

const calculateFinances = async (contributor: ContributorDoc): Promise<Contributor> => {
    const { IRSCuts, liquidWage, SSCut } = await Calculator.liquidWage(
        contributor.wage,
        !!contributor.specialRank
    );
    const { expenses, expensesTotal } = await getExpenses(contributor.financesCredentials.username);

    return {
        debts: await getDebts(contributor.financesCredentials.username),
        expenses,
        expensesTotal: Calculator.round(expensesTotal),
        IRSCuts,
        liquidWage,
        name: contributor.name,
        SSCut,
        wage: contributor.wage
    };
};

const calculatePayments = async (contributor: Contributor, sharedWage: number) => {
    const { expensesTotal } = await getExpenses();

    contributor.portionToPay = Calculator.round(
        expensesTotal * (contributor.liquidWage / sharedWage)
    );
    contributor.remainder = Calculator.round(
        contributor.liquidWage -
            (contributor.portionToPay +
                Calculator.total(contributor.expenses.map(expense => expense.amount)))
    );

    return contributor;
};

export const getContributors = async () => {
    try {
        const contributorDocs = await StorageHandler.getAll<ContributorDoc>(DB_NAME, 'contributor');

        const contributors = await Promise.all(
            contributorDocs.map(async contributor => await calculateFinances(contributor))
        );

        const sharedWage = Calculator.total(
            contributors.map(contributor => contributor.liquidWage)
        );

        return await Promise.all(
            contributors.map(async contributor => await calculatePayments(contributor, sharedWage))
        );
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getContributors');
    }
};
