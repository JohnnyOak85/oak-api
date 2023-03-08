import { Server } from '@hapi/hapi';
import {
    getAttributeStats,
    getBaseStats,
    getBattleStats,
    getHealthStats,
    getLevelStats,
    getLuckStats,
    getMainStats,
    getStatCaps
} from '../helpers/stats';

export default {
    name: 'game-stats',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/game/stats/attributes',
            handler: async (request, h) => h.response(await getAttributeStats())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/stats/base',
            handler: async (request, h) => h.response(await getBaseStats())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/stats/battle',
            handler: async (request, h) => h.response(await getBattleStats())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/stats/caps',
            handler: async (request, h) => h.response(await getStatCaps())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/stats/health',
            handler: async (request, h) => h.response(await getHealthStats())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/stats/level',
            handler: async (request, h) => h.response(await getLevelStats())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/stats/luck',
            handler: async (request, h) => h.response(await getLuckStats())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/stats/main',
            handler: async (request, h) => h.response(await getMainStats())
        });
    }
};