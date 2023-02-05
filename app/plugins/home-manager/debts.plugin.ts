import { Server } from '@hapi/hapi';
import { getDebts } from '../../helpers/finances/debts';
import wrapper from '../../helpers/wrapper';

const debts = {
    name: 'debts',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/home/debts',
            handler: async (request, response) => wrapper(request.url, response, await getDebts())
        });
    }
};

export default debts;
