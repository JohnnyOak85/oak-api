import { ExpenseDoc, getExpenses } from './expenses';
import { calculateLiquidWage, calculateTotal } from './calculators';
import { round } from '../math';
import { DebtDoc, getDebts } from './debts';
import storage from '../../storage/storage';
import logger from '../logger';
import { MaybeDocument } from 'nano';

interface ContributorDoc extends MaybeDocument {
    financesCredentials: {
        username: string;
        password: string;
    };
    name: string;
    savings: number;
    specialRank?: boolean;
    wage: number;
}

interface Contributor {
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
}

const DB_NAME = 'contributors';

export const calculateFinances = async (contributor: ContributorDoc): Promise<Contributor> => {
    const { IRSCuts, liquidWage, SSCut } = await calculateLiquidWage(
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

const calculatePayments = async (contributor: Contributor, sharedWage: number) => {
    const { expensesTotal } = await getExpenses();

    contributor.portionToPay = round(expensesTotal * (contributor.liquidWage / sharedWage));
    contributor.remainder = round(
        contributor.liquidWage -
            (contributor.portionToPay +
                calculateTotal(contributor.expenses.map(expense => expense.amount)))
    );

    return contributor;
};

export const getContributors = async () => {
    try {
        const contributorDocs = await storage.getAll<ContributorDoc>(DB_NAME, 'contributor');

        const contributors = await Promise.all(
            contributorDocs.map(async contributor => await calculateFinances(contributor))
        );

        const sharedWage = calculateTotal(contributors.map(contributor => contributor.liquidWage));

        return await Promise.all(
            contributors.map(async contributor => await calculatePayments(contributor, sharedWage))
        );
    } catch (error) {
        logger.logError(error, 'getContributors');
        throw error;
    }
};
