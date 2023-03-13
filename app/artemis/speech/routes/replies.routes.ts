import { addPrefix, buildRouteHandler } from '../../../shared';
import { getGreetings, getPredictions, getReactions, getResponses } from '../handlers';

const prefix = 'replies';

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
