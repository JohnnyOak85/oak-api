import { addPrefix, buildRouteHandler } from '../../../shared';
import { getQuotes } from '../handlers';

const prefix = 'quotes';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getQuotes)
        }
    ],
    prefix
);
