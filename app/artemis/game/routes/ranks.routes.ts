import { buildRouteHandler } from '../../../shared';
import { getRank } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/rank',
        handler: buildRouteHandler(getRank)
    }
];
