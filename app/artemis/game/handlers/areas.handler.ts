import { getData, logInfo, notFound, putData, wrapError } from '../../../shared';
import { AreaDoc } from '../types';
import { DB_NAME } from '../shared';

type AreaPayload = { currentArea: string };

export const getCurrentArea = async () => {
    try {
        logInfo('artemis:game', 'Getting current area');

        return getData<string>('redis', 'currentArea');
    } catch (error) {
        throw wrapError(error, 'getCurrentArea');
    }
};

export const setCurrentArea = async ({ currentArea }: AreaPayload) => {
    try {
        logInfo('artemis:game', 'Setting current area');

        return putData<string>('redis', 'currentArea', currentArea);
    } catch (error) {
        throw wrapError(error, 'setCurrentArea');
    }
};

export const getAreaData = async () => {
    try {
        logInfo('artemis:game', 'Getting current area data');

        const areas = await getData<AreaDoc>(DB_NAME, 'areas');
        const currentArea = await getCurrentArea();

        if (!areas[currentArea]) {
            throw notFound('Area is not set');
        }

        return areas[currentArea];
    } catch (error) {
        throw wrapError(error, 'getAreaData');
    }
};

export const getAreaName = async () => {
    try {
        logInfo('artemis:game', 'Getting current area name');

        const currentArea = await getCurrentArea();

        return currentArea
            .split('_')
            .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
            .join(' ');
    } catch (error) {
        throw wrapError(error, 'getAreaName');
    }
};

export const getAreaMonsters = async () => {
    try {
        logInfo('artemis:game', 'Getting current area monster list');

        const currentArea = await getAreaData();

        return currentArea.map(rank => Object.keys(rank)).flat();
    } catch (error) {
        throw wrapError(error, 'getAreaMonsters');
    }
};
