import { getFile, logsPath, ServerRequest, ServerResponse, wrapError } from '../../shared';

export const getLogFile = async (request: ServerRequest, h: ServerResponse) => {
    try {
        return h.response(getFile(`${logsPath}/log.txt`).toString('utf8').split('\n'));
    } catch (error) {
        throw wrapError(error, 'getLogFile');
    }
};
