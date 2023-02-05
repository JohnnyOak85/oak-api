import nano from 'nano';
import { getEnvironmentVariables } from '../helpers/environment';

export interface DatabaseDoc {
    _id: string;
}

export default class Database<T extends {}> {
    private db: nano.DocumentScope<T>;

    constructor(dbName: string) {
        const { dbAddress } = getEnvironmentVariables();
        this.db = nano(dbAddress).db.use<T>(dbName);
    }

    public get = async <T>(id: string) => (await this.db.get(id)) as T;

    public getAll = async (key: string) =>
        await this.db
            .list({ include_docs: true, start_key: key, end_key: `${key}\uffff` })
            .then(({ rows }) => rows.map(({ doc }) => doc).filter(doc => doc));

    public put = async (doc: T) => await this.db.insert(doc);
}
