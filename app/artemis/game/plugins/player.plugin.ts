import { Server } from '@hapi/hapi';
import { getPlayers, getPlayer, getPlayerRanks, getPlayerAttributes } from '../helpers/players';

export default {
    name: 'game-players',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/game/players',
            handler: async (request, h) => h.response(await getPlayers())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/player',
            handler: async (request, h) => h.response(await getPlayer(request.query.player))
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/player/ranks',
            handler: async (request, h) => h.response(await getPlayerRanks())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/player/attributes',
            handler: async (request, h) => h.response(await getPlayerAttributes())
        });
    }
};
