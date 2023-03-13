import { PaymentEntryDoc } from '.';

export interface DebtDoc extends PaymentEntryDoc {
    remainder: number;
}
