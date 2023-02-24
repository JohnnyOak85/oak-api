import { Server } from '@hapi/hapi';
import { getQuirks } from '../helpers/quirks';

export default {
    name: 'speech-quirks',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/quirks',
            handler: async (request, h) => h.response(await getQuirks())
        });
    }
};
