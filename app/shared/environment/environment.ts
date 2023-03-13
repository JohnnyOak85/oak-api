import { config } from 'dotenv';
import { logError } from '..';
import { envPath } from '../../../paths';

export const getVariables = () => ({
    certificate: process.env.CERTIFICATE || '',
    dbAddress: process.env.DB_ADDRESS || '',
    dbName: process.env.DB_NAME || '',
    host: process.env.HOST || '',
    newsApi: process.env.NEWS_API || '',
    newsApiKey: process.env.NEWS_API_KEY || '',
    port: process.env.PORT || ''
});

export const startEnvironment = () => {
    const { error } = config({ path: envPath });

    if (error) {
        logError(error, 'startEnvironment');
        throw error;
    }
};
