import { addPrefix, buildRouteHandler } from '../../shared';
import { getDailyGamingNews } from '../handlers';

const prefix = 'news';

// TODO Needs to be shared or a separate integration microservice

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
