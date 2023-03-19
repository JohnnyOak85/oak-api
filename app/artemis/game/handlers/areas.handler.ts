import { get, getDoc, notFound, wrapError, put, getVariables } from '../../../shared';
import { AreaDoc } from '../interfaces';
import { DB_NAME } from '../shared';

type AreaPayload = { currentArea: string };

const key = 'currentArea';

export const getCurrentArea = async () => {
    try {
        const { storageAddress: url } = getVariables();
        const { data } = await get<string>({ url, params: { key } });

        return data;
    } catch (error) {
        throw wrapError(error, 'getCurrentArea');
    }
};

export const setCurrentArea = async ({ currentArea }: AreaPayload) => {
    try {
        const { storageAddress: url } = getVariables();
        const { data } = await put<string>({ url, data: { key, value: currentArea } });

        return data;
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
