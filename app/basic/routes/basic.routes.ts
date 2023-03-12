import { notFoundHandler } from '../../shared';
import { getLogFile, getMainPage } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/',
        handler: getMainPage
    },
    {
        method: '*',
        path: '/{p*}',
        handler: notFoundHandler
    },
    {
        method: 'GET',
        path: '/log',
        handler: getLogFile
    }
];
