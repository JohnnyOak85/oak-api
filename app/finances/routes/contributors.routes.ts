import { buildRouteHandler } from '../../shared';
import { getContributors } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/contributors',
        handler: buildRouteHandler(getContributors)
    }
];
