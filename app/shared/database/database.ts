import nano from 'nano';
import { Collector } from '../classes';
import { getVariables } from '../environment';

class Database<T extends {}> {
    private db: nano.DocumentScope<T>;

    constructor(dbName: string) {
        const { dbAddress } = getVariables();
        this.db = nano(dbAddress).db.use<T>(dbName);
    }

    public get = async (id: string) => this.db.get(id) as Promise<T>;

    public getAll = async (key: string) =>
        this.db
            .list({ include_docs: true, start_key: key, end_key: `${key}\uffff` })
            .then(({ rows }) => rows.map(({ doc }) => doc).filter(doc => doc)) as Promise<T[]>;

    public put = async (doc: T) => this.db.insert(doc);
}

const databases: Collector<Database<any>> = new Collector();

const getDatabase = <T extends {}>(storeId: string) => {
    if (!databases.has(storeId)) {
        databases.put(storeId, new Database<T>(storeId));
    }

    return databases.get(storeId) as Database<T>;
};

export const getDoc = <T extends {}>(storeId: string, id: string) => {
    try {
        const db = getDatabase<T>(storeId);

        return db.get(id);
    } catch (error) {
        throw error;
    }
};

export const getDocs = <T extends {}>(storeId: string, id: string) => {
    try {
        const db = getDatabase<T>(storeId);

        return db.getAll(id);
    } catch (error) {
        throw error;
    }
};

export const putDoc = async <T extends {}>(storeId: string, item: T) => {
    try {
        const db = getDatabase<T>(storeId);

        return db.put(item);
    } catch (error) {
        throw error;
    }
};
