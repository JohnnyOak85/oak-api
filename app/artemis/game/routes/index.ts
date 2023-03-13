import { addPrefix } from '../../../shared';
import { routes as AreasRoutes } from './areas.routes';
import { routes as PlayersRoutes } from './players.routes';
import { routes as RanksRoutes } from './ranks.routes';
import { routes as StatsRoutes } from './stats.routes';

const prefix = 'game';

export const routes = [
    ...addPrefix(AreasRoutes, prefix),
    ...addPrefix(PlayersRoutes, prefix),
    ...addPrefix(RanksRoutes, prefix),
    ...addPrefix(StatsRoutes, prefix)
];
