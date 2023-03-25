import { config } from 'dotenv';
import { logInfo, wrapError } from '../shared';

const path = `${__dirname}/.env`;

const startEnvironment = () => {
    const { error } = config({ path });

    if (error) {
        wrapError(error, 'startEnvironment');
        throw error;
    }

    logInfo('storage', 'Environment started');
};

export const getVariables = () => {
    try {
        startEnvironment();

        return {
            couchAddress: process.env.COUCH_ADDRESS!,
            host: process.env.DB_HOST!,
            port: process.env.DB_PORT!,
            redisAddress: process.env.REDIS_ADDRESS!
        };
    } catch (error) {
        throw error;
    }
};
