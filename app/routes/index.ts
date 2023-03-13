import { routes as basicRoutes } from '../basic';
import { routes as financesRoutes } from '../finances';
import { routes as newsRoutes } from '../news';

export default [...basicRoutes, ...financesRoutes, ...newsRoutes];
