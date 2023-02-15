import { Server } from '@hapi/hapi';
import { ReminderDoc } from '../../helpers/artemis/interfaces';
import { getConfig, getReminders, putReminder } from '../../helpers/artemis/reminders';
import wrapper from '../../helpers/wrapper';
import reminderSchema from '../../schemas/reminder.schema';

export default {
    name: 'reminders',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/reminders',
            handler: async (request, response) => await wrapper(request.url, response, getReminders)
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
            handler: async (request, response) => await wrapper(request.url, response, getConfig)
        });
    }
};
