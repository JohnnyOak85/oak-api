export interface ContributorDoc {
    financesCredentials: {
        username: string;
        password: string;
    };
    name: string;
    savings: number;
    specialRank?: boolean;
    wage: number;
}
