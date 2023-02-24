import { Server } from '@hapi/hapi';
import { getConfig, getReminders, putReminder } from '../helpers/reminders';
import ReminderDoc from '../interfaces/ReminderDoc.interface';
import reminderSchema from '../schemas/reminder.schema';

export default {
    name: 'reminders',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/reminders',
            handler: async (request, h) => h.response(await getReminders())
        });
        server.route({
            method: 'PUT',
            path: '/artemis/reminders',
            handler: async (request, h) =>
                h.response(await putReminder(request.payload as ReminderDoc)),
            options: {
                validate: {
                    payload: reminderSchema
                }
            }
        });
        server.route({
            method: 'GET',
            path: '/artemis/reminders/config',
            handler: async (request, h) => h.response(await getConfig())
        });
    }
};
