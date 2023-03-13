import { addPrefix } from '../../shared';
import { routes as contributorsRoutes } from './contributors.routes';
import { routes as debtsRoutes } from './debts.routes';
import { routes as expensesRoutes } from './expenses.routes';

export const routes = [
    ...addPrefix(contributorsRoutes, 'finances'),
    ...addPrefix(debtsRoutes, 'finances'),
    ...addPrefix(expensesRoutes, 'finances')
];
