import { config } from 'dotenv';
import log from './log';
import paths from '../../paths';

export default {
    get: () => ({
        certificate: process.env.CERTIFICATE || '',
        dbAddress: process.env.DB_ADDRESS || '',
        dbName: process.env.DB_NAME || '',
        host: process.env.HOST || '',
        port: process.env.PORT || ''
    }),
    start: () => {
        const { error } = config({ path: paths.environment });

        if (error) {
            log.error(error, 'startEnvironment');
            throw error;
        }
    }
};
