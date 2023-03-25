import { config } from 'dotenv';
import { logInfo, wrapError } from '../shared';

const path = `${__dirname}/.env`;

const startEnvironment = () => {
    const { error } = config({ path });

    if (error) {
        wrapError(error, 'startEnvironment');
        throw error;
    }

    logInfo('home-manager', 'Environment started');
};

export const getVariables = () => {
    try {
        startEnvironment();

        return {
            host: process.env.DB_HOST!,
            port: process.env.DB_PORT!,
            storageAddress: process.env.STORAGE_ADDRESS!
        };
    } catch (error) {
        throw error;
    }
};
