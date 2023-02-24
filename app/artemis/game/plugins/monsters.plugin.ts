import { Server } from '@hapi/hapi';
import { getMonsterAttributes, getMonsterRanks } from '../helpers/monters';

export default {
    name: 'game-monsters',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/game/monster/attributes',
            handler: async (request, h) => h.response(await getMonsterAttributes())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/monster/ranks',
            handler: async (request, h) => h.response(await getMonsterRanks())
        });
    }
};
