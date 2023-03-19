import { config } from 'dotenv';
import { wrapError } from '../app/shared';

const path = `${__dirname}/.env`;

const startEnvironment = () => {
    const { error } = config({ path });

    if (error) {
        wrapError(error, 'startEnvironment');
        throw error;
    }
};

export const getVariables = () => {
    try {
        startEnvironment();

        return {
            url: process.env.REDIS_ADDRESS!,
            host: process.env.CACHE_HOST!,
            port: process.env.CACHE_PORT!
        };
    } catch (error) {
        throw error;
    }
};
