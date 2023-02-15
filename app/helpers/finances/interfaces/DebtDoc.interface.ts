import PaymentEntryDoc from './PaymentEntryDoc.interface';

export default interface DebtDoc extends PaymentEntryDoc {
    remainder: number;
}
