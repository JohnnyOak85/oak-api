import { addPrefix, buildRouteHandler } from '../../../shared';
import { getPlayer, getPlayerAttributes, getPlayerRanks, getPlayers } from '../handlers';
import { PlayerIdSchema } from '../schemas/player_id.schema';

const prefix = 'players';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '/all',
            handler: buildRouteHandler(getPlayers)
        },
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getPlayer),
            options: {
                validate: {
                    query: PlayerIdSchema
                }
            }
        },
        {
            method: 'GET',
            path: '/ranks',
            handler: buildRouteHandler(getPlayerRanks)
        },
        {
            method: 'GET',
            path: '/attributes',
            handler: buildRouteHandler(getPlayerAttributes)
        }
    ],
    prefix
);
