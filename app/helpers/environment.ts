import { config } from 'dotenv';
import paths from '../../paths';
import { logError } from './logger';

export function startEnvironment() {
    const { error } = config({
        path: paths.environment
    });

    if (error) {
        logError(error, 'startEnvironment');
        throw error;
    }
}

export function getEnvironmentVariables() {
    return {
        certificate: process.env.CERTIFICATE || '',
        dbAddress: process.env.DB_ADDRESS || '',
        dbName: process.env.DB_NAME || '',
        host: process.env.HOST || '',
        port: process.env.PORT || ''
    };
}
