import { getCertifications, startServer, wrapError } from '../shared';
import { getVariables } from './environment';
import { routes } from './routes';

const init = async () => {
    try {
        const { host, port } = getVariables();
        const tls = getCertifications();

        await startServer({ host, port, tls }, routes, 'home-manager');
    } catch (error) {
        throw wrapError(error, 'init');
    }
};

process.on('unhandledRejection', error => {
    console.log('SYSTEM ERROR:', error);
    process.exit(1);
});

init();
