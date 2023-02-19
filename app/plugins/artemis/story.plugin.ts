import { Server } from '@hapi/hapi';
import { getBlocks, getDecorators } from '../../helpers/artemis/story';
import wrapper from '../../helpers/wrapper';

export default {
    name: 'story',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/story/blocks',
            handler: async (request, response) => await wrapper(request, response, getBlocks)
        });
        server.route({
            method: 'GET',
            path: '/artemis/story/decorators',
            handler: async (request, response) => await wrapper(request, response, getDecorators)
        });
    }
};
