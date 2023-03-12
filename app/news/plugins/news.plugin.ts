import { Server } from '@hapi/hapi';
import { getNews } from '../helpers';

export default {
    name: 'news',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/news/gaming',
            handler: async (request, h) => h.response(await getNews())
        });
    }
};
