import { generateId, wrapError } from '../../../shared';
import { getData, putData } from '../../helpers';
import { ReminderConfigDoc, ReminderDoc } from '../types';

const DB_NAME = 'reminders';

export const getReminders = () => {
    try {
        return getData<ReminderDoc>(DB_NAME, 'reminder', true);
    } catch (error) {
        throw wrapError(error, 'getReminders');
    }
};

export const getConfig = () => {
    try {
        return getData<ReminderConfigDoc>(DB_NAME, 'config');
    } catch (error) {
        throw wrapError(error, 'getConfig');
    }
};

export const putReminder = (reminder: ReminderDoc) => {
    try {
        if (!reminder.id) {
            reminder.id = `reminder_${generateId()}`;
        }

        return putData<ReminderDoc>(DB_NAME, reminder.id, reminder);
    } catch (error: any) {
        throw wrapError(error, 'putReminder');
    }
};
