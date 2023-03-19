import { getCertifications, getVariables, startServer, wrapError } from './shared';
import routes from './routes';

const init = async () => {
    try {
        const { host, port } = getVariables();

        await startServer({ host, port, tls: getCertifications() }, routes);
    } catch (error) {
        throw wrapError(error, 'init');
    }
};

process.on('unhandledRejection', error => {
    console.log('SYSTEM ERROR:', error);
    process.exit(1);
});

init();
