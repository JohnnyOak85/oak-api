import { ErrorHandler, Storage } from '../../../tools';
import MonsterConfig from '../interfaces/MonsterConfigDoc.interface';
import DB_NAME from '../shared/DB_NAME';

const getMonsterConfig = () => Storage.get<MonsterConfig>(DB_NAME, 'monster_config');

export const getMonsterRanks = async () => {
    try {
        const { chances, ranks } = await getMonsterConfig();
        return { chances, ranks };
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getMonsterRanks');
    }
};

export const getMonsterAttributes = async () => {
    try {
        const { classes, colors, descriptions, variations } = await getMonsterConfig();
        return { classes, colors, descriptions, variations };
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getMonsterAttributes');
    }
};
