import { Server } from '@hapi/hapi';
import { ErrorHandler } from '../../tools';
import { getLogFile } from '../helpers/log';
import { buildMainPage } from '../helpers/main';

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
                handler: (request, h) => ErrorHandler.notFound()
            },
            {
                method: 'GET',
                path: '/log',
                handler: (request, h) => h.response(getLogFile())
            }
        ]);
    }
};
