import plugins from './plugins';
import {
    getCertifications,
    getVariables,
    startEnvironment,
    startServer,
    wrapError
} from './shared';
import routes from './routes';

const init = async () => {
    try {
        startEnvironment();

        const { host, port } = getVariables();

        await startServer({ host, port, tls: getCertifications() }, routes, plugins);
    } catch (error) {
        throw wrapError(error, 'init');
    }
};

process.on('unhandledRejection', error => {
    console.log('SYSTEM ERROR:', error);
    process.exit(1);
});

init();
