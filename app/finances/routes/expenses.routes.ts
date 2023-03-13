import { addPrefix, buildRouteHandler } from '../../shared';
import { getExpenses } from '../handlers';

const prefix = 'expenses';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getExpenses)
        }
    ],
    prefix
);
