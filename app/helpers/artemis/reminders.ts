import storage from '../../storage/storage';
import identifier from '../../tools/identifier';
import log from '../../tools/log';
import { ReminderConfig, ReminderDoc } from './interfaces';

const DB_NAME = 'reminders';

export const getReminders = async () => {
    try {
        return await storage.getAll<ReminderDoc>(DB_NAME, 'reminder');
    } catch (error) {
        log.error(error, 'getReminders');
        throw error;
    }
};

export const getConfig = async () => {
    try {
        return await storage.get<ReminderConfig>(DB_NAME, 'config');
    } catch (error) {
        log.error(error, 'getConfig');
        throw error;
    }
};

export const putReminder = async (reminder: ReminderDoc) => {
    try {
        if (!reminder._id) {
            reminder._id = `reminder_${identifier.generate()}`;
        }

        const doc = await storage.get<ReminderDoc>(DB_NAME, reminder._id);

        return await storage.put<ReminderDoc>(DB_NAME, { ...doc, ...reminder });
    } catch (error: any) {
        if (error.statusCode === 404) {
            return await storage.put<ReminderDoc>(DB_NAME, reminder);
        }

        log.error(error, 'putReminder');
        throw error;
    }
};
