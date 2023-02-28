import { createClient } from 'redis';

const client = createClient();

client.connect();

export default {
    get: (key: string) => client.get(key),
    put: (key: string, value: string) => client.set(key, value),
    delete: (key: string) => client.del(key)
};
