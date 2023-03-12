import { createLogger, format, transports } from 'winston';
import { logs } from '../../../paths';
import { getTimestamp } from '../time';

const logger = createLogger({
    level: 'info',
    format: format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
    defaultMeta: { service: 'user-service' },
    transports: [new transports.File({ filename: `${logs}/log.txt` })]
});

export const logError = (error: any, method: string) =>
    logger.error(`${getTimestamp()} | Method: ${method} | Message: ${error}`);
