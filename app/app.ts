import Hapi from '@hapi/hapi';
import { getEnvironmentVariables, startEnvironment } from './helpers/environment';
import { logError } from './helpers/logger';
import plugins from './plugins';

const init = async () => {
    try {
        startEnvironment();

        const { host, port } = getEnvironmentVariables();
        const server = Hapi.server({ port, host });

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
