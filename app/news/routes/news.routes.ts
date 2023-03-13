import { addPrefix, buildRouteHandler } from '../../shared';
import { getDailyGamingNews } from '../handlers';

const prefix = 'news';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '/gaming',
            handler: buildRouteHandler(getDailyGamingNews)
        }
    ],
    prefix
);
