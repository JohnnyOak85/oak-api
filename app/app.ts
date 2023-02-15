import Hapi from '@hapi/hapi';
import certification from './tools/certification';
import environment from './tools/environment';
import log from './tools/log';
import plugins from './plugins';

const init = async () => {
    try {
        environment.start();

        const tls = certification.get();
        const { host, port } = environment.get();
        const routes = {
            cors: {
                origin: ['*'],
                headers: ['Accept', 'Content-Type'],
                additionalHeaders: ['X-Requested-With']
            }
        };

        const server = Hapi.server({ port, host, tls, routes });

        await server.register(plugins);
        await server.start();

        console.log('Server running on %s', server.info.uri);
    } catch (error) {
        log.error(error as Error, 'init');
    }
};

process.on('unhandledRejection', error => {
    console.log('SYSTEM ERROR:', error);
    process.exit(1);
});

init();
