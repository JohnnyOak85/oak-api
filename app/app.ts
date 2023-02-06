import Hapi from '@hapi/hapi';
import { buildCertification } from './helpers/certification';
import { getEnvironmentVariables, startEnvironment } from './helpers/environment';
import { logError } from './helpers/logger';
import plugins from './plugins';

const init = async () => {
    try {
        startEnvironment();

        const tls = buildCertification();
        const { host, port } = getEnvironmentVariables();
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
        logError(error, 'init');
    }
};

process.on('unhandledRejection', error => {
    console.log('SYSTEM ERROR:', error);
    process.exit(1);
});

init();
