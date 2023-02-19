import { MaybeDocument } from 'nano';

export default interface QuotesDoc extends MaybeDocument {
    quotes: string[];
}
