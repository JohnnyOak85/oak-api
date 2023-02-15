import { Server } from '@hapi/hapi';
import { getConfig, getReminders, putReminder } from '../../helpers/artemis/reminders';
import wrapper from '../../helpers/wrapper';
import reminderSchema from '../../schemas/reminder.schema';

export default {
    name: 'reminders',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/reminders',
            handler: async (request, response) => await wrapper(request, response, getReminders)
        });
        server.route({
            method: 'PUT',
            path: '/artemis/reminders',
            handler: async (request, response) => await wrapper(request, response, putReminder),
            options: {
                validate: {
                    payload: reminderSchema
                }
            }
        });
        server.route({
            method: 'GET',
            path: '/artemis/reminders/config',
            handler: async (request, response) => await wrapper(request, response, getConfig)
        });
    }
};
