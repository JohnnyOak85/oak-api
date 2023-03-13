import { addPrefix } from '../../shared';
import { routes as contributorsRoutes } from './contributors.routes';
import { routes as debtsRoutes } from './debts.routes';
import { routes as expensesRoutes } from './expenses.routes';
import { routes as wageRoutes } from './wage.routes';

const prefix = 'finances';
export const routes = [
    ...addPrefix(contributorsRoutes, prefix),
    ...addPrefix(debtsRoutes, prefix),
    ...addPrefix(expensesRoutes, prefix),
    ...addPrefix(wageRoutes, prefix)
];
