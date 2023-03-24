import { addPrefix, buildRouteHandler } from '../../../shared';
import { getGreetings, getPredictions, getReactions, getResponses } from '../handlers';

const prefix = 'replies';

// TODO Needs PUT endpoints

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '/greetings',
            handler: buildRouteHandler(getGreetings)
        },
        {
            method: 'GET',
            path: '/predictions',
            handler: buildRouteHandler(getPredictions)
        },
        {
            method: 'GET',
            path: '/reactions',
            handler: buildRouteHandler(getReactions)
        },
        {
            method: 'GET',
            path: '/responses',
            handler: buildRouteHandler(getResponses)
        }
    ],
    prefix
);
