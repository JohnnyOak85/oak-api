import { Server } from '@hapi/hapi';
import { getLogFile } from '../helpers/log';
import { buildMainPage } from '../helpers/main';
import { buildNotFoundPage } from '../helpers/not-found';

export default {
    name: 'basic',
    register: (server: Server) => {
        server.route([
            {
                method: 'GET',
                path: '/',
                handler: (request, h) => h.response(buildMainPage())
            },
            {
                method: '*',
                path: '/{p*}',
                handler: (request, h) => h.response(buildNotFoundPage())
            },
            {
                method: 'GET',
                path: '/log',
                handler: (request, h) => h.response(getLogFile())
            }
        ]);
    }
};
