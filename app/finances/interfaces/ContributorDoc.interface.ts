import { MaybeDocument } from 'nano';

export interface ContributorDoc extends MaybeDocument {
    financesCredentials: {
        username: string;
        password: string;
    };
    name: string;
    savings: number;
    specialRank?: boolean;
    wage: number;
}
