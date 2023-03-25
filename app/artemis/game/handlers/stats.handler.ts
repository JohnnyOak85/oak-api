import { logInfo, wrapError } from '../../../shared';
import { getData } from '../../helpers';
import { StatsDoc } from '../types';
import { DB_NAME } from '../shared';

const getStats = async () => {
    try {
        return getData<StatsDoc>(DB_NAME, 'stats');
    } catch (error) {
        throw wrapError(error, 'getStats');
    }
};

export const getAttributeStats = async () => {
    try {
        logInfo('artemis:game', 'Getting attribute stats');

        const { attributes } = await getStats();

        return attributes;
    } catch (error) {
        throw wrapError(error, 'getAttributeStats');
    }
};

export const getBaseStats = async () => {
    try {
        logInfo('artemis:game', 'Getting base stats');

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
        logInfo('artemis:game', 'Getting battle stats');

        const { battle } = await getStats();

        return battle;
    } catch (error) {
        throw wrapError(error, 'getBattleStats');
    }
};

export const getHealthStats = async () => {
    try {
        logInfo('artemis:game', 'Getting health stats');

        const { health } = await getStats();

        return health;
    } catch (error) {
        throw wrapError(error, 'getHealthStats');
    }
};

export const getLevelStats = async () => {
    try {
        logInfo('artemis:game', 'Getting level stats');

        const { level } = await getStats();

        return level;
    } catch (error) {
        throw wrapError(error, 'getLevelStats');
    }
};

export const getLuckStats = async () => {
    try {
        logInfo('artemis:game', 'Getting luck stats');

        const { luck } = await getStats();

        return luck;
    } catch (error) {
        throw wrapError(error, 'getLuckStats');
    }
};

export const getMainStats = async () => {
    try {
        logInfo('artemis:game', 'Getting main stats');

        const { stat } = await getStats();

        return stat;
    } catch (error) {
        throw wrapError(error, 'getMainStats');
    }
};

export const getStatCaps = async () => {
    try {
        logInfo('artemis:game', 'Getting stat caps');

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
