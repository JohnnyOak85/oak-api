import { config } from 'dotenv';
import { wrapError } from '..';
import { envPath } from '../../../paths';

let isSet = false;

const setEnvironment = () => {
    const { error } = config({ path: envPath });

    if (error) {
        wrapError(error, 'startEnvironment');
        throw error;
    }

    isSet = true;
};

export const getVariables = () => {
    try {
        if (!isSet) {
            setEnvironment();
        }

        return {
            host: process.env.HOST!,
            artemisPort: process.env.ARTEMIS_PORT!,
            homePort: process.env.HOME_PORT!,
            storagePort: process.env.STORAGE_PORT!,
            storageAddress: `http://${process.env.HOST}${process.env.STORAGE_PORT}`,
            couchAddress: process.env.COUCH_ADDRESS!,
            redisAddress: process.env.REDIS_ADDRESS!,
            certificate: process.env.CERTIFICATE!,
            newsApi: process.env.NEWS_API!,
            newsApiKey: process.env.NEWS_API_KEY!
        };
    } catch (error) {
        throw error;
    }
};
