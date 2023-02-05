import { Server } from '@hapi/hapi';
import { getExpenses } from '../../helpers/finances/expenses';
import wrapper from '../../helpers/wrapper';

const expenses = {
    name: 'expenses',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/home/expenses',
            handler: async (request, response) =>
                wrapper(request.url, response, await getExpenses())
        });
    }
};

export default expenses;
