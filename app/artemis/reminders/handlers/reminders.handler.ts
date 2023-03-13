import { generateId, getDoc, getDocs, putDoc, wrapError } from '../../../shared';
import { ReminderConfigDoc, ReminderDoc } from '../interfaces';

const DB_NAME = 'reminders';

export const getReminders = async () => {
    try {
        return await getDocs<ReminderDoc>(DB_NAME, 'reminder');
    } catch (error) {
        throw wrapError(error, 'getReminders');
    }
};

export const getConfig = async () => {
    try {
        return await getDoc<ReminderConfigDoc>(DB_NAME, 'config');
    } catch (error) {
        throw wrapError(error, 'getConfig');
    }
};

export const putReminder = async (reminder: ReminderDoc) => {
    try {
        if (!reminder._id) {
            reminder._id = `reminder_${generateId()}`;
        }

        const doc = await getDoc<ReminderDoc>(DB_NAME, reminder._id);

        return await putDoc<ReminderDoc>(DB_NAME, { ...doc, ...reminder });
    } catch (error: any) {
        if (error.statusCode === 404) {
            return await putDoc<ReminderDoc>(DB_NAME, reminder);
        }

        throw wrapError(error, 'putReminder');
    }
};
