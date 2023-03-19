import { config } from 'dotenv';
import { wrapError } from '../shared';

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
            host: process.env.DB_HOST!,
            port: process.env.DB_PORT!,
            storageAddress: process.env.STORAGE_ADDRESS!
        };
    } catch (error) {
        throw error;
    }
};
