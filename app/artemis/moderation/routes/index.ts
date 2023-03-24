import { addPrefix } from '../../../shared';
import { routes as UsersRoutes } from './users.routes';

const prefix = 'moderation';

export const routes = [...addPrefix(UsersRoutes, prefix)];
