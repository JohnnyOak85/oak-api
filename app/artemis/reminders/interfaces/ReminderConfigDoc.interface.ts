import { MaybeDocument } from 'nano';

export interface ReminderConfigDoc extends MaybeDocument {
    birthdays: string[];
}
