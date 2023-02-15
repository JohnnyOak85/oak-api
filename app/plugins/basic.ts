import { Server } from '@hapi/hapi';
import { buildNotFoundPage } from '../helpers/not-found';
import wrapper from '../helpers/wrapper';

export default {
    name: 'basic',
    register: (server: Server) => {
        server.route([
            {
                method: 'GET',
                path: '/',
                handler: (request, response) => wrapper(request, response, () => 'Hello World!')
            },
            {
                method: '*',
                path: '/{p*}',
                handler: (request, response) => wrapper(request, response, buildNotFoundPage)
            }
        ]);
    }
};
