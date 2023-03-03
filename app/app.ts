import Hapi from '@hapi/hapi';
import { Certification, Environment, ErrorHandler, Logger } from './tools';
import plugins from './plugins';

const init = async () => {
    try {
        Environment.start();

        const { host, port } = Environment.get();

        const server = Hapi.server({
            host,
            port,
            routes: {
                cors: {
                    origin: ['*'],
                    headers: ['Accept', 'Content-Type'],
                    additionalHeaders: ['X-Requested-With']
                }
            },
            tls: Certification.get()
        });

        await server.register(plugins);
        await server.start();

        console.log('Server running on %s', server.info.uri);
    } catch (error) {
        throw ErrorHandler.wrap(error, 'init');
    }
};

process.on('unhandledRejection', error => {
    console.log('SYSTEM ERROR:', error);
    process.exit(1);
});

init();
