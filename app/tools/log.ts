import { createLogger, format, transports } from 'winston';
import paths from '../../paths';
import time from './time';

const logger = createLogger({
    level: 'info',
    format: format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.File({ filename: `${paths.logs}/log.txt` })]
});

export default {
    error: ({ message }: any, func: string) =>
        logger.error(`${time.get()} | Function: ${func} | Message: ${message}`)
};
