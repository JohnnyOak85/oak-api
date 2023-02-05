import LocalCache from './cache';
import { Collector } from './collector';
import Database from './database';

const databases: Collector<Database<any>> = new Collector();
const caches: Collector<LocalCache> = new Collector();

const getStorage = <T extends {}>(storeId: string) => {
    if (!caches.has(storeId)) {
        caches.put(storeId, new LocalCache(storeId));
    }

    if (!databases.has(storeId)) {
        databases.put(storeId, new Database<T>(storeId));
    }

    return {
        cache: caches.get(storeId) as LocalCache,
        db: databases.get(storeId) as Database<any>
    };
};

export const get = async <T extends {}>(storeId: string, id: string) => {
    try {
        const { cache, db } = getStorage<T>(storeId);

        const doc = await cache.get<T>(id);

        if (!doc) {
            const doc = await db?.get<T>(id);

            cache.put(id, doc);

            return doc;
        }

        return doc;
    } catch (error) {
        throw error;
    }
};

export const put = async <T extends {}>(storeId: string, id: string, item: any) => {
    try {
        const { cache, db } = getStorage<T>(storeId);

        db.put(item);
        cache.put(id, item);
    } catch (error) {
        throw error;
    }
};

export const getAll = async <T extends {}>(storeId: string, id: string) => {
    try {
        const { cache, db } = getStorage<T>(storeId);

        const docs = await cache.getAll<T>(id);

        if (!docs.length) {
            const docs = await db.getAll(id);

            docs.forEach(doc => cache.put(doc._id, doc));

            return docs;
        }

        return docs;
    } catch (error) {
        throw error;
    }
};
