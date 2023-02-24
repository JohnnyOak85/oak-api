import { Server } from '@hapi/hapi';
import { getContributors } from '../helpers/contributors';

export default {
    name: 'contributors',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/home/contributors',
            handler: async (request, h) => h.response(await getContributors())
        });
    }
};
