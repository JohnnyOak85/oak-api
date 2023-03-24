type QuirkEntry = {
    find: string;
    replace: string;
    type?: 'letter' | 'punctuation' | 'suffix';
};

export type QuirkDoc = {
    quirks: QuirkEntry[][];
};
