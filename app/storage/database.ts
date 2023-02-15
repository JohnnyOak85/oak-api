import nano from 'nano';
import environment from '../tools/environment';

export default class Database<T extends {}> {
    private db: nano.DocumentScope<T>;

    constructor(dbName: string) {
        const { dbAddress } = environment.get();
        this.db = nano(dbAddress).db.use<T>(dbName);
    }

    public get = async (id: string) => this.db.get(id) as Promise<T>;

    public getAll = async (key: string) =>
        this.db
            .list({ include_docs: true, start_key: key, end_key: `${key}\uffff` })
            .then(({ rows }) => rows.map(({ doc }) => doc).filter(doc => doc)) as Promise<T[]>;

    public put = async (doc: T) => this.db.insert(doc);
}
