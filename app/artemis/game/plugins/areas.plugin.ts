import { Server } from '@hapi/hapi';
import { getAreaData, getCurrentArea, setCurrentArea } from '../helpers/areas';

export default {
    name: 'game-areas',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/game/area-data',
            handler: async (request, h) => h.response(await getAreaData())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/area',
            handler: async (request, h) => h.response(await getCurrentArea())
        });
        server.route({
            method: 'PUT',
            path: '/artemis/game/area',
            handler: async (request, h) =>
                h.response(await setCurrentArea(request.query.currentArea))
        });
    }
};
