import { config } from 'dotenv';
import { ENV_PATH } from '../../paths';
import { logError } from './logger';

export function startEnvironment() {
    const { error } = config({
        path: ENV_PATH
    });

    if (error) {
        logError(error, 'startEnvironment');
        throw error;
    }
}

export function getEnvironmentVariables() {
    return {
        dbAddress: process.env.DB_ADDRESS || '',
        dbName: process.env.DB_NAME || '',
        host: process.env.HOST || '',
        port: process.env.PORT || ''
    };
}
