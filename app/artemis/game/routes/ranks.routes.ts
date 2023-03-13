import { addPrefix, buildRouteHandler } from '../../../shared';
import { getRank } from '../handlers';

const prefix = 'ranks';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getRank)
        }
    ],
    prefix
);
