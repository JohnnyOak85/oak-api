import nano from 'nano';
import { getVariables } from '../../shared';

const getClient = () => {
    const { couchAddress: url } = getVariables();

    return nano(url).db;
};

const client = getClient();

export const getDoc = async (db: string, id: string) => {
    try {
        const { _id, _rev, ...doc } = await client.use(db).get(id);

        return { ...doc, id: _id };
    } catch (error) {
        throw error;
    }
};

export const getAll = async (db: string, key: string) => {
    try {
        const { rows } = await client
            .use(db)
            .list({ include_docs: true, start_key: key, end_key: `${key}\uffff` });

        return rows.map(({ doc }) => doc).filter(doc => doc);
    } catch (error) {
        throw error;
    }
};

export const putDoc = async (db: string, { id, ...doc }: any) => {
    try {
        const { _id, _rev } = await client.use(db).get(id);

        return client.use(db).insert({ ...doc, _id, _rev });
    } catch (error: any) {
        if (error.statusCode === 404) {
            return client.use(db).insert({ ...doc, _id: id });
        }

        throw error;
    }
};

export const deleteDoc = async (db: string, id: string) => {
    try {
        const { _rev } = await client.use(db).get(id);

        return client.use(db).destroy(id, _rev);
    } catch (error) {
        throw error;
    }
};
