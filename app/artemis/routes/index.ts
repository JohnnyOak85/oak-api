import { routes as AreaRoutes } from '../game';
import { routes as ReminderRoutes } from '../reminders';
import { routes as SpeechRoutes } from '../speech';
import { routes as NewsRoutes } from '../../news';
import { addPrefix } from '../../shared';

const prefix = 'artemis';

export const routes = [
    ...addPrefix(AreaRoutes, prefix),
    ...addPrefix(ReminderRoutes, prefix),
    ...addPrefix(SpeechRoutes, prefix),
    ...addPrefix(NewsRoutes, prefix)
];
