import { createLogger, format, transports } from 'winston';
import { logsPath } from '../../paths';
import time from './time';

const logger = createLogger({
    level: 'info',
    format: format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.File({ filename: `${logsPath}/log.txt` })]
});

export default {
    error: (error: any, func: string) =>
        logger.error(`${time.get()} | Function: ${func} | Message: ${error}`)
};
