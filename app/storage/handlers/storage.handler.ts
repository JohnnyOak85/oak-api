import { badData, logInfo, teapot } from '../../shared';
import { deleteDoc, deleteValue, getAll, getDoc, getValue, putDoc, putValue } from '../helpers';

type Args = {
    all: string;
    db: string;
    id: string;
    value: any;
};

const isRedis = (db: string) => db === 'redis';
const parseBoolean = (bool: string) => (bool === 'true' ? true : false);

export const GET = async ({ all, db, id }: Args) => {
    try {
        logInfo('storage', `GET:${db}:${id}`);

        if (isRedis(db)) {
            if (parseBoolean(all)) {
                throw teapot();
            }

            return await getValue(id);
        }

        if (parseBoolean(all)) {
            return await getAll(db, id);
        }

        return await getDoc(db, id);
    } catch (error) {
        throw error;
    }
};

export const PUT = async ({ db, id, value }: Args) => {
    try {
        logInfo('storage', `PUT:${db}:${id}`);

        if (isRedis(db)) {
            if (!value) {
                throw badData();
            }

            return await putValue(id, value);
        }

        return await putDoc(db, { id, ...value });
    } catch (error) {
        throw error;
    }
};

export const DELETE = async ({ db, id }: Args) => {
    try {
        logInfo('storage', `DELETE:${db}:${id}`);

        if (isRedis(db)) {
            return await deleteValue(id);
        }

        return await deleteDoc(db, id);
    } catch (error) {
        throw error;
    }
};
