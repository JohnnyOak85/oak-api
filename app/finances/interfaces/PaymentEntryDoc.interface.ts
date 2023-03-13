import { MaybeDocument } from 'nano';

export interface PaymentEntryDoc extends MaybeDocument {
    amount: number;
    type: string;
}
