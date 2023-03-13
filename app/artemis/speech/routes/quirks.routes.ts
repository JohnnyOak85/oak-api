import { addPrefix, buildRouteHandler } from '../../../shared';
import { getQuirks } from '../handlers';

const prefix = 'quirks';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getQuirks)
        }
    ],
    prefix
);
