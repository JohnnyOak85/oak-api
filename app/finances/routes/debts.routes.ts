import { buildRouteHandler } from '../../shared';
import { getDebts } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/debts',
        handler: buildRouteHandler(getDebts)
    }
];
