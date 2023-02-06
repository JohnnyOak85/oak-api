import { MaybeDocument } from 'nano';

export default interface PaymentEntryDoc extends MaybeDocument {
    amount: number;
    type: string;
}
