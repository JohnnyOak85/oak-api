import { createClient } from 'redis';
import { getVariables } from '../environment';
import { notFound } from '../../app/shared';

type Payload = {
    key: string;
    value: string;
};

type Query = {
    key: string;
};

const getClient = () => {
    const { url } = getVariables();

    return createClient({ url });
};

const client = getClient();

client.connect();

export const getValue = async ({ key }: Query) => {
    try {
        const value = await client.get(key);

        if (!value) {
            throw notFound();
        }

        return value;
    } catch (error) {
        throw error;
    }
};

export const putValue = ({ key, value }: Payload) => {
    try {
        return client.set(key, value);
    } catch (error) {
        throw error;
    }
};

export const deleteValue = ({ key }: Query) => client.del(key);
