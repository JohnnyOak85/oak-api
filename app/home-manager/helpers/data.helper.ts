import { get, getVariables, put } from '../../shared';

export const getData = async <T>(suffix: string, id: string, all = false) => {
    try {
        const { storageAddress } = getVariables();
        const { data } = await get<T>({ url: `${storageAddress}/${suffix}`, params: { all, id } });

        return data;
    } catch (error) {
        throw error;
    }
};

export const putData = async <T>(suffix: string, id: string, value: any) => {
    try {
        const { storageAddress } = getVariables();
        const { data } = await put<T>({
            url: `${storageAddress}/${suffix}`,
            data: { id, value }
        });

        return data;
    } catch (error) {
        throw error;
    }
};
