import { MaybeDocument } from 'nano';

export interface ReminderDoc extends MaybeDocument {
    done?: boolean;
    event?: string;
    image?: string;
    memberId?: string;
    timestamp: number;
    type: 'birthday' | 'celebration' | 'release';
    url?: string;
}
