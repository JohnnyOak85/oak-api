import { Server } from '@hapi/hapi';
import { getContributors } from '../../helpers/finances/contributors';
import wrapper from '../../helpers/wrapper';

export default {
    name: 'contributors',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/home/contributors',
            handler: async (request, response) =>
                wrapper(request.url, response, await getContributors())
        });
    }
};
