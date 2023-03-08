import { Server } from '@hapi/hapi';
import {
    getAreaData,
    getAreaMonsters,
    getAreaName,
    getCurrentArea,
    setCurrentArea
} from '../helpers/areas';
import areaSchema from '../schemas/area.schema';

export default {
    name: 'game-areas',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/game/area',
            handler: async (request, h) => h.response(await getCurrentArea())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/area/data',
            handler: async (request, h) => h.response(await getAreaData())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/area/list',
            handler: async (request, h) => h.response(await getAreaMonsters())
        });
        server.route({
            method: 'GET',
            path: '/artemis/game/area/name',
            handler: async (request, h) => h.response(await getAreaName())
        });
        server.route({
            method: 'PUT',
            path: '/artemis/game/area',
            handler: async (request, h) =>
                h.response(await setCurrentArea(request.query.currentArea)),
            options: {
                validate: {
                    query: areaSchema
                }
            }
        });
    }
};
