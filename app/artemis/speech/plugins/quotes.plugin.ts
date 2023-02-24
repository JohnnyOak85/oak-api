import { Server } from '@hapi/hapi';
import { getQuotes } from '../helpers/quotes';

export default {
    name: 'quotes',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/quotes',
            handler: async (request, h) => h.response(await getQuotes())
        });
    }
};
