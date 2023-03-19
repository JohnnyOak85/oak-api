import { buildRouteHandler, notFound } from '../../app/shared';
import { deleteValue, getValue, putValue } from '../handlers';
import { PayloadSchema, QuerySchema } from '../schemas';

export const routes = [
    {
        method: 'GET',
        path: '/',
        handler: buildRouteHandler(getValue, 'query'),
        options: {
            description: 'Get value from cache database.',
            validate: QuerySchema
        }
    },
    {
        method: 'PUT',
        path: '/',
        handler: buildRouteHandler(putValue, 'payload'),
        options: {
            description: 'Creates value in cache database.',
            validate: PayloadSchema
        }
    },
    {
        method: 'POST',
        path: '/',
        handler: buildRouteHandler(putValue, 'payload'),
        options: {
            description: 'Updates value in cache database.',
            validate: PayloadSchema
        }
    },
    {
        method: 'DELETE',
        path: '/',
        handler: buildRouteHandler(deleteValue, 'query'),
        options: {
            description: 'Deletes value in cache database.',
            validate: QuerySchema
        }
    },
    {
        method: '*',
        path: '/{p*}',
        handler: () => notFound()
    }
];
