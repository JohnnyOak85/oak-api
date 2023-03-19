import { buildRouteHandler, notFound } from '../../shared';
import { DELETE, GET, PUT } from '../handlers';
import { ParamsSchema, QuerySchema } from '../schemas';
import { PayloadSchema } from '../schemas/Payload.schema';

export const routes = [
    {
        method: 'GET',
        path: '/{db}',
        handler: buildRouteHandler(GET),
        options: {
            validate: { ...ParamsSchema, ...QuerySchema }
        }
    },
    {
        method: 'PUT',
        path: '/{db}',
        handler: buildRouteHandler(PUT),
        options: {
            validate: { ...ParamsSchema, ...PayloadSchema }
        }
    },
    {
        method: 'DELETE',
        path: '/{db}',
        handler: buildRouteHandler(DELETE),
        options: {
            validate: { ...ParamsSchema, ...QuerySchema }
        }
    },
    {
        method: '*',
        path: '/{p*}',
        handler: () => notFound()
    }
];
