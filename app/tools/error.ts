import { boomify, Decorate, isBoom, notAcceptable, notFound, Options } from '@hapi/boom';
import log from './log';

type ErrorOptions = Options<unknown> & Decorate<unknown>;

export default {
    notFound: notFound,
    wrap: (error: any, functionName = 'default', options?: ErrorOptions) => {
        try {
            log.error(options?.message || error.message || error, functionName);

            if (isBoom(error)) {
                throw error;
            }

            if (error.message.includes('EISDIR')) {
                throw notAcceptable(error);
            }

            if (error.message.includes('ENOENT')) {
                throw notFound(error);
            }

            throw boomify(error, options);
        } catch (error) {
            throw error;
        }
    }
};
