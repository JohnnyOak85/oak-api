import { getVariables, startServer, wrapError } from '../shared';
import { routes } from './routes';

const init = async () => {
    try {
        const { host, storagePort: port } = getVariables();

        await startServer({ host, port }, routes, 'storage');
    } catch (error) {
        throw wrapError(error, 'init');
    }
};

process.on('unhandledRejection', error => {
    console.log('SYSTEM ERROR:', error);
    process.exit(1);
});

init();
