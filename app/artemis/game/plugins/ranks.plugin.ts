import { Server } from '@hapi/hapi';
import { getRank } from '../helpers/ranks';

export default {
    name: 'game-rank',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/game/rank',
            handler: async (request, h) => h.response(await getRank())
        });
    }
};
