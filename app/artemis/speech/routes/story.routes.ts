import { addPrefix, buildRouteHandler } from '../../../shared';
import { getBlocks, getDecorators } from '../handlers';

const prefix = 'story';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '/blocks',
            handler: buildRouteHandler(getBlocks)
        },
        {
            method: 'GET',
            path: '/decorators',
            handler: buildRouteHandler(getDecorators)
        }
    ],
    prefix
);
