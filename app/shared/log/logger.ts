import { createLogger, format, transports } from 'winston';
import { getTimestamp } from '..';
import { logsPath } from '../../../paths';

const logger = createLogger({
    level: 'info',
    format: format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.File({ filename: `${logsPath}/log.txt` })]
});

export const logError = (error: any, method: string) =>
    logger.error(`${getTimestamp()} | Method: ${method} | Message: ${error}`);
