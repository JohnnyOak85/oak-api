import { badData, teapot } from '../../app/shared';
import { deleteDoc, deleteValue, getAll, getDoc, getValue, putDoc, putValue } from '../helpers';

type Args = {
    all: string;
    db: string;
    id: string;
    value: string;
};

const isRedis = (db: string) => db === 'redis';
const parseBoolean = (bool: string) => (bool === 'true' ? true : false);

export const GET = async ({ all, db, id }: Args) => {
    try {
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

export const PUT = async ({ all, db, id, value, ...payload }: Args) => {
    try {
        if (isRedis(db)) {
            if (!value) {
                throw badData();
            }

            return await putValue(id, value);
        }

        return await putDoc(db, { id, ...payload });
    } catch (error) {
        throw error;
    }
};

export const DELETE = async ({ db, id }: Args) => {
    try {
        if (isRedis(db)) {
            return await deleteValue(id);
        }

        return await deleteDoc(db, id);
    } catch (error) {
        throw error;
    }
};
