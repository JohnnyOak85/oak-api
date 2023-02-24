import { boomify, notFound } from '@hapi/boom';
import log from './log';

export default {
    notFound: notFound,
    wrap: (error: any, functionName = 'default') => {
        log.error(error, functionName);
        return boomify(error);
    }
};
