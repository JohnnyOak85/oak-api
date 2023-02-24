import { boomify, notAcceptable, notFound } from '@hapi/boom';
import log from './log';

export default {
    notFound: notFound,
    wrap: (error: any, functionName = 'default') => {
        log.error(error, functionName);

        if (error.message.includes('EISDIR')) {
            throw notAcceptable(error);
        }

        if (error.message.includes('ENOENT')) {
            throw notFound(error);
        }

        return boomify(error);
    }
};
