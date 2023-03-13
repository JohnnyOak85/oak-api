import { getDoc, getDocs, wrapError } from '../../../shared';
import { PlayerConfigDoc, PlayerDoc } from '../interfaces';
import { DB_NAME } from '../shared';

const PREFIX = 'gamer';

type PlayerQuery = {
    playerId: string;
};

const getPlayerConfig = () => getDoc<PlayerConfigDoc>(DB_NAME, 'player_config');

export const getPlayers = () => {
    try {
        return getDocs<PlayerDoc>(DB_NAME, PREFIX);
    } catch (error) {
        throw wrapError(error, 'getPlayers');
    }
};

export const getPlayer = ({ playerId }: PlayerQuery) => {
    try {
        return getDoc<PlayerDoc>(DB_NAME, `${PREFIX}_${playerId}`);
    } catch (error) {
        throw wrapError(error, 'getPlayer');
    }
};

export const getPlayerRanks = async () => {
    try {
        const { ranks } = await getPlayerConfig();

        return ranks;
    } catch (error) {
        throw wrapError(error, 'getPlayerRanks');
    }
};

export const getPlayerAttributes = async () => {
    try {
        const { attributes } = await getPlayerConfig();

        return attributes;
    } catch (error) {
        throw wrapError(error, 'getPlayerAttributes');
    }
};
