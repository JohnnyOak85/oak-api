import { routes as ArtemisRoutes } from '../artemis';
import { routes as BasicRoutes } from '../basic';
import { routes as FinancesRoutes } from '../finances';
import { routes as NewsRoutes } from '../news';

export default [...ArtemisRoutes, ...BasicRoutes, ...FinancesRoutes, ...NewsRoutes];
