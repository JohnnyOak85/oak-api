import { Server } from '@hapi/hapi';
import { getQuirks } from '../../helpers/artemis/quirks';
import wrapper from '../../helpers/wrapper';

export default {
    name: 'quirks',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/quirks',
            handler: async (request, response) => await wrapper(request, response, getQuirks)
        });
    }
};
