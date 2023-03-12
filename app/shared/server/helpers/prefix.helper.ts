import { ReqRefDefaults, ServerRoute } from '@hapi/hapi';

export const addPrefix = (routes: ServerRoute<ReqRefDefaults>[], prefix: string) =>
    routes.map(route => ({ ...route, path: `/${prefix}${route.path}` }));
