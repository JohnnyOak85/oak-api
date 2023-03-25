import { createClient } from 'redis';
import { getVariables, notFound } from '../../shared';

const getClient = () => {
    const { redisAddress: url } = getVariables();

    return createClient({ url });
};

const client = getClient();

client.connect();

export const getValue = async (key: string) => {
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

export const putValue = (key: string, value: string) => {
    try {
        return client.set(key, value);
    } catch (error) {
        throw error;
    }
};

export const deleteValue = (key: string) => client.del(key);
