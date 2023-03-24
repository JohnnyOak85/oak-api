import { routes as FinancesRoutes } from '../finances';
import { routes as BasicRoutes } from '../../shared';

export const routes = [...BasicRoutes, ...FinancesRoutes];
