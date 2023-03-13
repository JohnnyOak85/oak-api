import { buildRouteHandler } from '../../shared';
import { getDailyGamingNews } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/news/gaming',
        handler: buildRouteHandler(getDailyGamingNews)
    }
];
