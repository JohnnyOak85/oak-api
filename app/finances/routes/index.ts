import { addPrefix } from '../../shared';
import { routes as ContributorsRoutes } from './contributors.routes';
import { routes as DebtsRoutes } from './debts.routes';
import { routes as ExpensesRoutes } from './expenses.routes';
import { routes as WageRoutes } from './wages.routes';

const prefix = 'finances';

export const routes = [
    ...addPrefix(ContributorsRoutes, prefix),
    ...addPrefix(DebtsRoutes, prefix),
    ...addPrefix(ExpensesRoutes, prefix),
    ...addPrefix(WageRoutes, prefix)
];
