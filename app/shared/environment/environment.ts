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

        const {
            ARTEMIS_PORT,
            CERTIFICATE,
            COUCH_ADDRESS,
            HOME_PORT,
            HOST,
            NEWS_API,
            NEWS_API_KEY,
            REDIS_ADDRESS,
            STORAGE_PORT
        } = process.env;

        return {
            host: HOST!,
            artemisPort: ARTEMIS_PORT!,
            homePort: HOME_PORT!,
            storagePort: STORAGE_PORT!,
            storageAddress: `http://${HOST}${STORAGE_PORT}`,
            couchAddress: COUCH_ADDRESS!,
            redisAddress: REDIS_ADDRESS!,
            certificate: CERTIFICATE!,
            newsApi: NEWS_API!,
            newsApiKey: NEWS_API_KEY!
        };
    } catch (error) {
        throw error;
    }
};
