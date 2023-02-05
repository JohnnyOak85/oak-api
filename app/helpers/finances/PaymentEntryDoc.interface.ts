import { DatabaseDoc } from '../../storage/database';

export default interface PaymentEntryDoc extends DatabaseDoc {
    amount: number;
    type: string;
}
