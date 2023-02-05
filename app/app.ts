import Hapi from '@hapi/hapi';
import { startEnvironment } from './helpers/environment';
import { logError } from './helpers/logger';
import plugins from './plugins';

const init = async () => {
    const server = Hapi.server({
        port: 8081,
        host: 'localhost'
    });

    try {
        startEnvironment();

        // await server.register(require('@hapi/inert'));
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
