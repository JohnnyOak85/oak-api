import ReminderConfig from '../interfaces/ReminderConfig.interface';
import ReminderDoc from '../interfaces/ReminderDoc.interface';
import { ErrorHandler, Identifier, StorageHandler } from '../../../tools';

const DB_NAME = 'reminders';

export const getReminders = async () => {
    try {
        return await StorageHandler.getAll<ReminderDoc>(DB_NAME, 'reminder');
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getReminders');
    }
};

export const getConfig = async () => {
    try {
        return await StorageHandler.get<ReminderConfig>(DB_NAME, 'config');
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getConfig');
    }
};

export const putReminder = async (reminder: ReminderDoc) => {
    try {
        if (!reminder._id) {
            reminder._id = `reminder_${Identifier.generate()}`;
        }

        const doc = await StorageHandler.get<ReminderDoc>(DB_NAME, reminder._id);

        return await StorageHandler.put<ReminderDoc>(DB_NAME, { ...doc, ...reminder });
    } catch (error: any) {
        if (error.statusCode === 404) {
            return await StorageHandler.put<ReminderDoc>(DB_NAME, reminder);
        }

        throw ErrorHandler.wrap(error, 'putReminder');
    }
};
