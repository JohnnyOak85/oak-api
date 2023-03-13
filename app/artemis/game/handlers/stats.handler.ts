import { getDoc, wrapError } from '../../../shared';
import { StatsDoc } from '../interfaces';
import { DB_NAME } from '../shared';

const getStats = async () => {
    try {
        return getDoc<StatsDoc>(DB_NAME, 'stats');
    } catch (error) {
        throw wrapError(error, 'getStats');
    }
};

export const getAttributeStats = async () => {
    try {
        const { attributes } = await getStats();

        return attributes;
    } catch (error) {
        throw wrapError(error, 'getAttributeStats');
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
        throw wrapError(error, 'getBaseStats');
    }
};

export const getBattleStats = async () => {
    try {
        const { battle } = await getStats();

        return battle;
    } catch (error) {
        throw wrapError(error, 'getBattleStats');
    }
};

export const getHealthStats = async () => {
    try {
        const { health } = await getStats();

        return health;
    } catch (error) {
        throw wrapError(error, 'getHealthStats');
    }
};

export const getLevelStats = async () => {
    try {
        const { level } = await getStats();

        return level;
    } catch (error) {
        throw wrapError(error, 'getLevelStats');
    }
};

export const getLuckStats = async () => {
    try {
        const { luck } = await getStats();

        return luck;
    } catch (error) {
        throw wrapError(error, 'getLuckStats');
    }
};

export const getMainStats = async () => {
    try {
        const { stat } = await getStats();

        return stat;
    } catch (error) {
        throw wrapError(error, 'getMainStats');
    }
};

export const getStatCaps = async () => {
    try {
        const { health, luck, stat } = await getStats();

        return {
            healthCap: health.cap,
            luckCap: luck.cap,
            statCap: stat.cap
        };
    } catch (error) {
        throw wrapError(error, 'getStatCaps');
    }
};
