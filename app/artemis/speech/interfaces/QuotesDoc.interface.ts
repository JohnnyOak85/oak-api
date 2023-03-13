import { MaybeDocument } from 'nano';

export interface QuotesDoc extends MaybeDocument {
    quotes: string[];
}
