import { createLogger, format, transports } from 'winston';
import { LOGS_PATH } from '../../paths';
import { getTextFile } from './files';
import { getTime } from './time';

const logger = createLogger({
    level: 'info',
    format: format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.File({ filename: 'logs/log.txt' })]
});

const parseError = (error: any) => (typeof error === 'string' ? error : error.message);

export const logError = (error: any, func: string) =>
    logger.error(`${getTime()} | Function: ${func} | Message: ${parseError(error)}`);

export const logInfo = (message: string) => logger.log('info', `${message} at ${getTime()}`);

export const getLog = () => ['Log:'].concat(getTextFile(`${LOGS_PATH}/log.txt`));
