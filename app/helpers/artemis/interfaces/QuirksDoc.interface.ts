import { MaybeDocument } from 'nano';

type QuirkEntry = {
    find: string;
    replace: string;
    type?: 'letter' | 'punctuation' | 'suffix';
};

export default interface QuirkDoc extends MaybeDocument {
    quirks: QuirkEntry[][];
}
