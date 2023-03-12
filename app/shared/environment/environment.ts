import { config } from 'dotenv';
import { environment } from '../../../paths';
import { logError } from '../log';

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
    const { error } = config({ path: environment });

    if (error) {
        logError(error, 'startEnvironment');
        throw error;
    }
};
