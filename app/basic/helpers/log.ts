import paths from '../../../paths';
import files from '../../tools/files';
import ErrorHandler from '../../tools/error';

export const getLogFile = () => {
    try {
        return files.get(`${paths.logs}/log.txt`).toString('utf8');
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getLogFile');
    }
};
