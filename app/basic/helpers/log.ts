import { ErrorHandler, FileHandler, PathHandler } from '../../tools';

export const getLogFile = () => {
    try {
        return FileHandler.get(`${PathHandler.logs}/log.txt`)
            .toString('utf8')
            .split('\n')
            .map(line => `<p>${line.replace('\r', '')}</p>`)
            .join('');
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getLogFile');
    }
};
