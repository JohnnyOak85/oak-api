import { ErrorHandler, StorageHandler } from '../../../tools';
import PlayerConfigDoc from '../interfaces/PlayerConfigDoc.interface';
import PlayerDoc from '../interfaces/PlayerDoc.interface';
import DB_NAME from '../shared/DB_NAME';

const PREFIX = 'gamer';

const getPlayerConfig = () => StorageHandler.get<PlayerConfigDoc>(DB_NAME, 'player_config');

export const getPlayers = () => {
    try {
        return StorageHandler.getAll<PlayerDoc>(DB_NAME, PREFIX);
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getPlayers');
    }
};

export const getPlayer = (player: string) => {
    try {
        return StorageHandler.get<PlayerDoc>(DB_NAME, `${PREFIX}_${player}`);
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getPlayer');
    }
};

export const getPlayerRanks = async () => {
    try {
        const { ranks } = await getPlayerConfig();

        return ranks;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getPlayerRanks');
    }
};

export const getPlayerAttributes = async () => {
    try {
        const { attributes } = await getPlayerConfig();

        return attributes;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getPlayerAttributes');
    }
};
