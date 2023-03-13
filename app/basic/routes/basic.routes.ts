import { buildRouteHandler } from '../../shared';
import { getMainPage, getLog, notFoundHandler } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/',
        handler: buildRouteHandler(getMainPage)
    },
    {
        method: '*',
        path: '/{p*}',
        handler: notFoundHandler
    },
    {
        method: 'GET',
        path: '/log',
        handler: buildRouteHandler(getLog)
    }
];
