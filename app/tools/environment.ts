import { config } from 'dotenv';
import { envPath } from '../../paths';
import log from './log';

export default {
    get: () => ({
        certificate: process.env.CERTIFICATE || '',
        dbAddress: process.env.DB_ADDRESS || '',
        dbName: process.env.DB_NAME || '',
        host: process.env.HOST || '',
        newsApi: process.env.NEWS_API || '',
        newsApiKey: process.env.NEWS_API_KEY || '',
        port: process.env.PORT || ''
    }),
    start: () => {
        const { error } = config({ path: envPath });

        if (error) {
            log.error(error, 'startEnvironment');
            throw error;
        }
    }
};
