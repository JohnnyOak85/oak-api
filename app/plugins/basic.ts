import { Server } from '@hapi/hapi';
import { buildMainPage } from '../helpers/basic/main';
import { buildNotFoundPage } from '../helpers/basic/not-found';
import wrapper from '../helpers/wrapper';

export default {
    name: 'basic',
    register: (server: Server) => {
        server.route([
            {
                method: 'GET',
                path: '/',
                handler: (request, response) => wrapper(request, response, buildMainPage)
            },
            {
                method: '*',
                path: '/{p*}',
                handler: (request, response) => wrapper(request, response, buildNotFoundPage)
            }
        ]);
    }
};
