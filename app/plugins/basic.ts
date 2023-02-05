import { Server } from '@hapi/hapi';
import { buildNotFoundPage } from '../helpers/not-found';
import wrapper from '../helpers/wrapper';

const basic = {
    name: 'basic',
    register: (server: Server) => {
        server.route([
            {
                method: 'GET',
                path: '/',
                handler: (request, response) => wrapper(request.url, response, 'Hello World!')
            },
            {
                method: '*',
                path: '/{p*}',
                handler: (request, response, c) =>
                    wrapper(request.url, response, buildNotFoundPage())
            }
        ]);
    }
};

export default basic;
