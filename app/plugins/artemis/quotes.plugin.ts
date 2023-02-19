import { Server } from '@hapi/hapi';
import { getQuotes } from '../../helpers/artemis/quotes';
import wrapper from '../../helpers/wrapper';

export default {
    name: 'quotes',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/quotes',
            handler: async (request, response) => await wrapper(request, response, getQuotes)
        });
    }
};
