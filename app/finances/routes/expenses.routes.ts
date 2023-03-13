import { buildRouteHandler } from '../../shared';
import { getExpenses } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/expenses',
        handler: buildRouteHandler(getExpenses)
    }
];
