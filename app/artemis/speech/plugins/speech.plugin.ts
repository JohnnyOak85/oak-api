import { Server } from '@hapi/hapi';
import { getGreetings, getPredictions, getReactions, getResponses } from '../helpers/speech';

export default {
    name: 'speech',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/greetings',
            handler: async (request, h) => h.response(await getGreetings())
        });
        server.route({
            method: 'GET',
            path: '/artemis/predictions',
            handler: async (request, h) => h.response(await getPredictions())
        });
        server.route({
            method: 'GET',
            path: '/artemis/reactions',
            handler: async (request, h) => h.response(await getReactions())
        });
        server.route({
            method: 'GET',
            path: '/artemis/responses',
            handler: async (request, h) => h.response(await getResponses())
        });
    }
};
