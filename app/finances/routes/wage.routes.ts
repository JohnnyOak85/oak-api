import { getLiquidWageHandler } from '../handlers/wage.handler';
import { WageSchema } from '../schema';

export const routes = [
    {
        method: 'GET',
        path: '/wage',
        handler: getLiquidWageHandler,
        options: {
            validate: {
                query: WageSchema
            }
        }
    }
];
