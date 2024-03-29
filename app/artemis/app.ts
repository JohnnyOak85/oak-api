import { getVariables, startServer, wrapError } from '../shared';
import { routes } from './routes';

const init = async () => {
    try {
        const { host, artemisPort: port } = getVariables();

        await startServer({ host, port }, routes, 'artemis');
    } catch (error) {
        throw wrapError(error, 'artemis');
    }
};

process.on('unhandledRejection', error => {
    console.log('SYSTEM ERROR:', error);
    process.exit(1);
});

init();
