import { routes as GameRoutes } from '../game';
import { routes as ModerationRoutes } from '../moderation';
import { routes as ReminderRoutes } from '../reminders';
import { routes as SpeechRoutes } from '../speech';
import { routes as NewsRoutes } from '../../news';
import { routes as BasicRoutes } from '../../shared';

export const routes = [
    ...BasicRoutes,
    ...GameRoutes,
    ...ModerationRoutes,
    ...ReminderRoutes,
    ...SpeechRoutes,
    ...NewsRoutes
];
