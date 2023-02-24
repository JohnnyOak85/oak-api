import { ErrorHandler, FileHandler, PathHandler } from '../../tools';

export const getLogFile = () => {
    try {
        return FileHandler.get(`${PathHandler.logs}/log.txt`).toString('utf8');
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getLogFile');
    }
};
