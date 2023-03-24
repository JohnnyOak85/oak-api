import { addPrefix, buildRouteHandler } from '../../../shared';
import { getConfig, getReminders, putReminder } from '../handlers';
import { ReminderSchema } from '../schemas';

const prefix = 'reminders';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getReminders)
        },
        {
            method: 'PUT',
            path: '',
            handler: buildRouteHandler(putReminder),
            options: {
                validate: ReminderSchema
            }
        },
        {
            method: 'GET',
            path: '/config',
            handler: buildRouteHandler(getConfig)
        }
    ],
    prefix
);
