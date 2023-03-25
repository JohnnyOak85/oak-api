import { logInfo, wrapError } from '../../../shared';
import { getData } from '../../helpers';
import { PlayerConfigDoc, PlayerDoc } from '../types';
import { DB_NAME } from '../shared';

const PREFIX = 'gamer';

type Params = {
    id: string;
};

const getPlayerConfig = () => getData<PlayerConfigDoc>(DB_NAME, 'player_config');

export const getPlayers = () => {
    try {
        logInfo('artemis:game', 'Getting all players');

        return getData<PlayerDoc[]>(DB_NAME, PREFIX, true);
    } catch (error) {
        throw wrapError(error, 'getPlayers');
    }
};

export const getPlayer = ({ id }: Params) => {
    try {
        logInfo('artemis:game', `Getting player ${id}`);

        return getData<PlayerDoc>(DB_NAME, `${PREFIX}_${id}`);
    } catch (error) {
        throw wrapError(error, 'getPlayer');
    }
};

export const getPlayerRanks = async () => {
    try {
        logInfo('artemis:game', 'Getting player ranks');

        const { ranks } = await getPlayerConfig();

        return ranks;
    } catch (error) {
        throw wrapError(error, 'getPlayerRanks');
    }
};

export const getPlayerAttributes = async () => {
    try {
        logInfo('artemis:game', 'Getting player attributes');

        const { attributes } = await getPlayerConfig();

        return attributes;
    } catch (error) {
        throw wrapError(error, 'getPlayerAttributes');
    }
};
