import DebtDoc from './DebtDoc.interface';
import ExpenseDoc from './ExpenseDoc.interface';

export default interface Contributor {
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
