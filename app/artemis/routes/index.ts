import { routes as AreaRoutes } from '../game/routes';
import { routes as ReminderRoutes } from '../reminders/routes';
import { routes as NewsRoutes } from '../../news';
import { addPrefix } from '../../shared';

const prefix = 'artemis';

export const routes = [
    ...addPrefix(AreaRoutes, prefix),
    ...addPrefix(ReminderRoutes, prefix),
    ...addPrefix(NewsRoutes, prefix)
];
