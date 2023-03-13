import { buildRouteHandler } from '../../shared';
import { calcMonthlyWage } from '../helpers';
import { WageSchema } from '../schema';

export const routes = [
    {
        method: 'GET',
        path: '/wage',
        handler: buildRouteHandler(calcMonthlyWage, 'query'),
        options: {
            validate: {
                query: WageSchema
            }
        }
    }
];
