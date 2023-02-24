import { Server } from '@hapi/hapi';
import { getExpenses } from '../helpers/expenses';

export default {
    name: 'expenses',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/home/expenses',
            handler: async (request, h) => h.response(await getExpenses())
        });
    }
};
