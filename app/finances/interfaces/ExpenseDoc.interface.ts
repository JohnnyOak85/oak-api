import { PaymentEntryDoc } from '.';

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
