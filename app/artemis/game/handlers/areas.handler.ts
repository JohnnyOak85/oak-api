import { notFound, wrapError } from '../../../shared';
import { getData, putData } from '../../helpers';
import { AreaDoc } from '../types';
import { DB_NAME } from '../shared';

type AreaPayload = { currentArea: string };

export const getCurrentArea = async () => {
    try {
        return getData<string>('redis', 'currentArea');
    } catch (error) {
        throw wrapError(error, 'getCurrentArea');
    }
};

export const setCurrentArea = async ({ currentArea }: AreaPayload) => {
    try {
        return putData<string>('redis', 'currentArea', currentArea);
    } catch (error) {
        throw wrapError(error, 'setCurrentArea');
    }
};

export const getAreaData = async () => {
    try {
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
        const currentArea = await getAreaData();

        return currentArea.map(rank => Object.keys(rank)).flat();
    } catch (error) {
        throw wrapError(error, 'getAreaMonsters');
    }
};
