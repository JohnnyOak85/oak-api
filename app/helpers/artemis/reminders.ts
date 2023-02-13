import { MaybeDocument } from 'nano';
import storage from '../../storage/storage';
import { generateId } from '../generator';
import logger from '../logger';

export interface ReminderDoc extends MaybeDocument {
    done?: boolean;
    event?: string;
    image?: string;
    memberId?: string;
    timestamp: number;
    type: 'birthday' | 'celebration' | 'release';
    url?: string;
}

interface ReminderConfig extends MaybeDocument {
    birthdays: string[];
}

const DB_NAME = 'reminders';

export const getReminders = async () => {
    try {
        return await storage.getAll<ReminderDoc>(DB_NAME, 'reminder');
    } catch (error) {
        logger.logError(error, 'getReminders');
        throw error;
    }
};

export const getConfig = async () => {
    try {
        return await storage.get<ReminderConfig>(DB_NAME, 'config');
    } catch (error) {
        logger.logError(error, 'getConfig');
        throw error;
    }
};

export const putReminder = async (reminder: ReminderDoc) => {
    try {
        if (!reminder._id) {
            reminder._id = `reminder_${generateId()}`;
        }

        const doc = await storage.get<ReminderDoc>(DB_NAME, reminder._id);

        return await storage.put<ReminderDoc>(DB_NAME, { ...doc, ...reminder });
    } catch (error: any) {
        if (error.statusCode === 404) {
            return await storage.put<ReminderDoc>(DB_NAME, reminder);
        }

        logger.logError(error, 'putReminder');
        throw error;
    }
};
