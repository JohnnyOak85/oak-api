import { Server } from '@hapi/hapi';
import { getBlocks, getDecorators } from '../helpers/story';

export default {
    name: 'story',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/story/blocks',
            handler: async (request, h) => h.response(await getBlocks())
        });
        server.route({
            method: 'GET',
            path: '/artemis/story/decorators',
            handler: async (request, h) => h.response(await getDecorators())
        });
    }
};
