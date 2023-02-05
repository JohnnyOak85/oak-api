import { createClient, RedisClientType } from 'redis';
import { logError, logInfo } from '../helpers/logger';

const TOTAL_TRIES = 3;

export default class LocalCache {
    private client: RedisClientType;
    private prefix: string;

    private isCacheReady = () => this.client.isReady && this.client.isOpen;

    private connect = () => {
        if (this.isCacheReady()) return;

        let counter = 0;

        try {
            return this.client.connect().then(() => logInfo('Cache is online'));
        } catch (error) {
            while (counter < TOTAL_TRIES) {
                this.connect();
                counter++;
            }

            logError(error, 'startCache');
        }
    };

    private ensureConnection = async () => {
        if (this.isCacheReady()) return;

        await this.connect();
    };

    constructor(id: string) {
        this.prefix = id;
        this.client = createClient();
        this.client.connect().then(() => logInfo('Cache is online'));
    }

    public get = <T>(key: string) =>
        this.ensureConnection()
            .then(() => this.client.get(`${this.prefix}:${key}`))
            .then(value => JSON.parse(value as string) as T);

    public getAll = <T>(id: string) =>
        this.ensureConnection()
            .then(() => this.client.lRange(`${this.prefix}:list`, 0, -1))
            .then(keys => keys.filter(key => key.includes(id)))
            .then(keys => Promise.all(keys.map(key => this.get(key))) as Promise<T[]>);

    public put = (key: string, value: any) =>
        this.ensureConnection()
            .then(() => this.client.set(`${this.prefix}:${key}`, JSON.stringify(value)))
            .then(() => this.client.rPush(`${this.prefix}:list`, key));
}
