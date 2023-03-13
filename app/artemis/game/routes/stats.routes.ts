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
            // handler: async (request, h) => h.response(await getAttributeStats())
        },
        {
            method: 'GET',
            path: '/base',
            handler: buildRouteHandler(getBaseStats)
            // handler: async (request, h) => h.response(await getBaseStats())
        },
        {
            method: 'GET',
            path: '/battle',
            handler: buildRouteHandler(getBattleStats)
            // handler: async (request, h) => h.response(await getBattleStats())
        },
        {
            method: 'GET',
            path: '/caps',
            handler: buildRouteHandler(getStatCaps)
            // handler: async (request, h) => h.response(await getStatCaps())
        },
        {
            method: 'GET',
            path: '/health',
            handler: buildRouteHandler(getHealthStats)
            // handler: async (request, h) => h.response(await getHealthStats())
        },
        {
            method: 'GET',
            path: '/level',
            handler: buildRouteHandler(getLevelStats)
            // handler: async (request, h) => h.response(await getLevelStats())
        },
        {
            method: 'GET',
            path: '/luck',
            handler: buildRouteHandler(getLuckStats)
            // handler: async (request, h) => h.response(await getLuckStats())
        },
        {
            method: 'GET',
            path: '/main',
            handler: buildRouteHandler(getMainStats)
            // handler: async (request, h) => h.response(await getMainStats())
        }
    ],
    prefix
);
