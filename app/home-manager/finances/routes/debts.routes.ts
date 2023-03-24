import { addPrefix, buildRouteHandler } from '../../../shared';
import { getDebts } from '../handlers';

const prefix = 'debts';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getDebts)
        }
    ],
    prefix
);
