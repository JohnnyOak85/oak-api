import { Server } from '@hapi/hapi';
import areaSchema from '../schemas/area.schema';
import { getAreas } from '../helpers/areas';

export default {
    name: 'game-areas',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/game/areas',
            handler: async (request, h) => h.response(await getAreas(request.query.area)),
            options: {
                validate: {
                    query: areaSchema
                }
            }
        });
    }
};
