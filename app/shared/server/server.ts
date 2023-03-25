import { Request, ResponseToolkit, server, ServerOptions, ServerRoute } from '@hapi/hapi';
import { logInfo, wrapError } from '..';

type Callback = (args: any) => any | Promise<any>;

export const startServer = async (
    options: ServerOptions,
    routes: ServerRoute[],
    module: string
) => {
    try {
        options.routes = {
            cors: {
                origin: ['*'],
                headers: ['Accept', 'Content-Type'],
                additionalHeaders: ['X-Requested-With']
            }
        };

        const client = server(options);

        client.route(routes);
        await client.start();

        logInfo(module, `Server running on ${client.info.uri}`);
        console.log('Server running on %s', client.info.uri);
    } catch (error) {
        throw wrapError(error, 'startServer');
    }
};

export const buildRouteHandler = (cb: Callback) => {
    return async (request: Request, h: ResponseToolkit) => {
        try {
            return h.response(
                await cb({
                    ...request.query,
                    ...request.params,
                    ...(request.payload as Object)
                })
            );
        } catch (error) {
            throw wrapError(error, cb.name);
        }
    };
};

export const addPrefix = (routes: ServerRoute[], prefix: string) =>
    routes.map(route => ({ ...route, path: `/${prefix}${route.path}` })) as ServerRoute[];
