import { Server } from '@hapi/hapi';
import { getExpenses } from '../../helpers/finances/expenses';
import wrapper from '../../helpers/wrapper';

export default {
    name: 'expenses',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/home/expenses',
            handler: async (request, response) => await wrapper(request, response, getExpenses)
        });
    }
};
