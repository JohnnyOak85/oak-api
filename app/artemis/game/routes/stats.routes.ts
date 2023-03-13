import { addPrefix, buildRouteHandler } from '../../../shared';
import {
    getAttributeStats,
    getBaseStats,
    getBattleStats,
    getHealthStats,
    getLevelStats,
    getLuckStats,
    getMainStats,
    getStatCaps
} from '../handlers';

const prefix = 'stats';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '/attributes',
            handler: buildRouteHandler(getAttributeStats)
        },
        {
            method: 'GET',
            path: '/base',
            handler: buildRouteHandler(getBaseStats)
        },
        {
            method: 'GET',
            path: '/battle',
            handler: buildRouteHandler(getBattleStats)
        },
        {
            method: 'GET',
            path: '/caps',
            handler: buildRouteHandler(getStatCaps)
        },
        {
            method: 'GET',
            path: '/health',
            handler: buildRouteHandler(getHealthStats)
        },
        {
            method: 'GET',
            path: '/level',
            handler: buildRouteHandler(getLevelStats)
        },
        {
            method: 'GET',
            path: '/luck',
            handler: buildRouteHandler(getLuckStats)
        },
        {
            method: 'GET',
            path: '/main',
            handler: buildRouteHandler(getMainStats)
        }
    ],
    prefix
);
