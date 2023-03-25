import { generateId, logInfo, wrapError } from '../../../shared';
import { getData, putData } from '../../helpers';
import { ReminderConfigDoc, ReminderDoc } from '../types';

const DB_NAME = 'reminders';

export const getReminders = () => {
    try {
        logInfo('artemis:reminders', 'Getting all reminders');

        return getData<ReminderDoc>(DB_NAME, 'reminder', true);
    } catch (error) {
        throw wrapError(error, 'getReminders');
    }
};

export const getConfig = () => {
    try {
        logInfo('artemis:reminders', 'Getting reminder config');

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

        logInfo('artemis:reminders', `Putting reminder ${reminder.id}`);

        return putData<ReminderDoc>(DB_NAME, reminder.id, reminder);
    } catch (error: any) {
        throw wrapError(error, 'putReminder');
    }
};
