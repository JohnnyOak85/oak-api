import { config } from 'dotenv';
import { wrapError } from '..';
import { envPath } from '../../../paths';

const startEnvironment = () => {
    const { error } = config({ path: envPath });

    if (error) {
        wrapError(error, 'startEnvironment');
        throw error;
    }
};

export const getVariables = () => {
    try {
        startEnvironment();

        return {
            storageAddress: process.env.STORAGE_ADDRESS!,
            certificate: process.env.CERTIFICATE!,
            dbAddress: process.env.DB_ADDRESS!,
            dbName: process.env.DB_NAME!,
            host: process.env.HOST!,
            newsApi: process.env.NEWS_API!,
            newsApiKey: process.env.NEWS_API_KEY!,
            port: process.env.PORT!
        };
    } catch (error) {
        throw error;
    }
};
