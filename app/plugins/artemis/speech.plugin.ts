import { Server } from '@hapi/hapi';
import {
    getGreetings,
    getPredictions,
    getReactions,
    getResponses
} from '../../helpers/artemis/speech';
import wrapper from '../../helpers/wrapper';

export default {
    name: 'speech',
    register: (server: Server) => {
        server.route({
            method: 'GET',
            path: '/artemis/greetings',
            handler: async (request, response) => await wrapper(request, response, getGreetings)
        });
        server.route({
            method: 'GET',
            path: '/artemis/predictions',
            handler: async (request, response) => await wrapper(request, response, getPredictions)
        });
        server.route({
            method: 'GET',
            path: '/artemis/reactions',
            handler: async (request, response) => await wrapper(request, response, getReactions)
        });
        server.route({
            method: 'GET',
            path: '/artemis/responses',
            handler: async (request, response) => await wrapper(request, response, getResponses)
        });
    }
};
