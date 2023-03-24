export type ReminderDoc = {
    done?: boolean;
    event?: string;
    id?: string;
    image?: string;
    memberId?: string;
    timestamp: number;
    type: 'birthday' | 'celebration' | 'release';
    url?: string;
};
