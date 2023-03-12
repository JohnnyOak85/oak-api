import { Plugin, server, ServerOptions, ServerRoute } from '@hapi/hapi';
import { wrapError } from '../..';

export const startServer = async (
    options: ServerOptions,
    routes: ServerRoute[],
    plugins: Plugin<any, void>[]
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
        await client.register(plugins);
        await client.start();

        console.log('Server running on %s', client.info.uri);
    } catch (error) {
        throw wrapError(error, 'startServer');
    }
};
