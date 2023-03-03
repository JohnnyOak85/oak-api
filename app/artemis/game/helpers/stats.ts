import { ErrorHandler, StorageHandler } from '../../../tools';
import StatsDoc from '../interfaces/StatsDoc.interface';
import DB_NAME from '../shared/DB_NAME';

const getStats = async () => {
    try {
        return StorageHandler.get<StatsDoc>(DB_NAME, 'stats');
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getStats');
    }
};

export const getBaseStats = async () => {
    try {
        const { health, stat } = await getStats();

        return {
            attack: stat.base,
            defense: stat.base,
            health: health.base
        };
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getStats');
    }
};

export const getHealthStats = async () => {
    try {
        const { health } = await getStats();

        return health;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getStats');
    }
};

export const getLevelStats = async () => {
    try {
        const { level } = await getStats();

        return level;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getStats');
    }
};

export const getLuckStats = async () => {
    try {
        const { luck } = await getStats();

        return luck;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getStats');
    }
};

export const getMainStats = async () => {
    try {
        const { stat } = await getStats();

        return stat;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getStats');
    }
};
