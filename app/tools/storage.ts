import Collector from './collector';
import Database from './database';

const databases: Collector<Database<any>> = new Collector();

const getDatabase = <T extends {}>(storeId: string) => {
    if (!databases.has(storeId)) {
        databases.put(storeId, new Database<T>(storeId));
    }

    return databases.get(storeId) as Database<T>;
};

export default {
    get: async <T extends {}>(storeId: string, id: string) => {
        try {
            const db = getDatabase<T>(storeId);

            return db.get(id);
        } catch (error) {
            throw error;
        }
    },
    getAll: async <T extends {}>(storeId: string, id: string) => {
        try {
            const db = getDatabase<T>(storeId);

            return db.getAll(id);
        } catch (error) {
            throw error;
        }
    },
    put: async <T extends {}>(storeId: string, item: T) => {
        try {
            const db = getDatabase<T>(storeId);

            return db.put(item);
        } catch (error) {
            throw error;
        }
    }
};
