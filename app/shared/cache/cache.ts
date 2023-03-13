import { createClient } from 'redis';

const client = createClient();

client.connect();

export const getValue = (key: string) => client.get(key);
export const putValue = (key: string, value: string) => client.set(key, value);
export const deleteValue = (key: string) => client.del(key);
