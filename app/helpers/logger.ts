import { createLogger, format, transports } from 'winston';
import paths from '../../paths';
import { getTime } from './time';

const logger = createLogger({
    level: 'info',
    format: format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.File({ filename: `${paths.logs}/log.txt` })]
});

export default {
    logError: ({ message }: Error, func: string) =>
        logger.error(`${getTime()} | Function: ${func} | Message: ${message}`),
    logInfo: (message: string) => logger.log('info', `${message} at ${getTime()}`)
};
