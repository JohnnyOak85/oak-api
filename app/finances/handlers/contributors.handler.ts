import { getDebts, getExpenses } from '.';
import { getDocs, round, wrapError } from '../../shared';
import { calcLiquidWage, calcTotal } from '../helpers';
import { ContributorDoc, DebtDoc, ExpenseDoc } from '../interfaces';

type Contributor = {
    debts: DebtDoc[];
    expenses: ExpenseDoc[];
    expensesTotal: number;
    IRSCuts: number;
    liquidWage: number;
    name: string;
    portionToPay?: number;
    remainder?: number;
    SSCut: number;
    wage: number;
};

const DB_NAME = 'contributors';

const calcFinances = async (contributor: ContributorDoc): Promise<Contributor> => {
    const { IRSCuts, liquidWage, SSCut } = await calcLiquidWage(
        contributor.wage,
        !!contributor.specialRank
    );
    const { expenses, expensesTotal } = await getExpenses(contributor.financesCredentials.username);

    return {
        debts: await getDebts(contributor.financesCredentials.username),
        expenses,
        expensesTotal: round(expensesTotal),
        IRSCuts,
        liquidWage,
        name: contributor.name,
        SSCut,
        wage: contributor.wage
    };
};

const calcPayments = async (contributor: Contributor, sharedWage: number) => {
    const { expensesTotal } = await getExpenses();

    contributor.portionToPay = round(expensesTotal * (contributor.liquidWage / sharedWage));
    contributor.remainder = round(
        contributor.liquidWage -
            (contributor.portionToPay +
                calcTotal(contributor.expenses.map(expense => expense.amount)))
    );

    return contributor;
};

export const getContributors = async () => {
    try {
        const contributorDocs = await getDocs<ContributorDoc>(DB_NAME, 'contributor');

        const contributors = await Promise.all(
            contributorDocs.map(async contributor => await calcFinances(contributor))
        );

        const sharedWage = calcTotal(contributors.map(contributor => contributor.liquidWage));

        return await Promise.all(
            contributors.map(async contributor => await calcPayments(contributor, sharedWage))
        );
    } catch (error) {
        throw wrapError(error, 'getContributors');
    }
};
