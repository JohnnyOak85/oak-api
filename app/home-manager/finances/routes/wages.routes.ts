import { addPrefix, buildRouteHandler } from '../../../shared';
import { calcMonthlyWage } from '../helpers';
import { WageSchema } from '../schema';

const prefix = 'wages';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(calcMonthlyWage),
            options: {
                validate: WageSchema
            }
        }
    ],
    prefix
);
