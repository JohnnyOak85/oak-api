import { notFoundHandler } from '../../shared';
import { logHandler, mainHandler } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/',
        handler: mainHandler
    },
    {
        method: '*',
        path: '/{p*}',
        handler: notFoundHandler
    },
    {
        method: 'GET',
        path: '/log',
        handler: logHandler
    }
];
