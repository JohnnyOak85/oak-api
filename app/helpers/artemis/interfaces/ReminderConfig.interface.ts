import { MaybeDocument } from 'nano';

export default interface ReminderConfig extends MaybeDocument {
    birthdays: string[];
}
