import { getDoc, getValue, notFound, putValue, wrapError } from '../../../shared';
import { AreaDoc } from '../interfaces';
import { DB_NAME } from '../shared';

type AreaPayload = {
    currentArea: string;
};

export const getCurrentArea = async () => {
    try {
        const currentArea = await getValue('current-area');

        if (!currentArea) {
            throw notFound('Area is not set');
        }

        return currentArea;
    } catch (error) {
        throw wrapError(error, 'getCurrentArea');
    }
};

export const setCurrentArea = async ({ currentArea }: AreaPayload) => {
    try {
        await putValue('current-area', currentArea);

        return 'true';
    } catch (error) {
        throw wrapError(error, 'setCurrentArea');
    }
};

export const getAreaData = async () => {
    try {
        const areas = await getDoc<AreaDoc>(DB_NAME, 'areas');
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
