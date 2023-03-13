import { addPrefix } from '../../../shared';
import { routes as RemindersRoutes } from './reminders.routes';

const prefix = 'moderation';

export const routes = [...addPrefix(RemindersRoutes, prefix)];
