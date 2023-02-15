import { Server } from '@hapi/hapi';
import { getDebts } from '../../helpers/finances/debts';
import wrapper from '../../helpers/wrapper';

export default {
    name: 'debts',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/home/debts',
            handler: async (request, response) => wrapper(request.url, response, await getDebts())
        });
    }
};
