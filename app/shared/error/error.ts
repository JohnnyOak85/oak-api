import { badData, boomify, isBoom, notAcceptable, notFound, teapot } from '@hapi/boom';
import { isAxiosError } from 'axios';
import { logError } from '..';

const isCouchError = ({ scope }: any) => scope === 'couch';

export const wrapError = (error: any, functionName = 'default') => {
    try {
        logError(error.response?.data?.message || error.message || error, functionName);

        if (isBoom(error)) {
            return error;
        }

        if (error.message.includes('EISDIR')) {
            return notAcceptable(error);
        }

        if (error.message.includes('ENOENT')) {
            return notFound(error);
        }

        if (error.response?.data) {
            return boomify(error, {
                message: error.response.data.message,
                statusCode: error.response.status
            });
        }

        if (isAxiosError(error)) {
            return boomify(error, { message: error.message, statusCode: 502 });
        }

        if (isCouchError(error)) {
            return boomify(error, { statusCode: error.statusCode });
        }

        return boomify(error);
    } catch (error) {
        throw error;
    }
};

export { badData, notAcceptable, notFound, teapot };
