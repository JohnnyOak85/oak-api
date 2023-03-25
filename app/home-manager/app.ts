import { getVariables, startServer, wrapError } from '../shared';
import { routes } from './routes';

const init = async () => {
    try {
        const { host, homePort: port } = getVariables();

        await startServer({ host, port }, routes, 'home-manager');
    } catch (error) {
        throw wrapError(error, 'home-manager');
    }
};

process.on('unhandledRejection', error => {
    console.log('SYSTEM ERROR:', error);
    process.exit(1);
});

init();
