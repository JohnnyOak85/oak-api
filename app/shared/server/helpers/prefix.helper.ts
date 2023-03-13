import { ServerRoute } from '@hapi/hapi';

export const addPrefix = (routes: ServerRoute[], prefix: string) =>
    routes.map(route => ({ ...route, path: `/${prefix}${route.path}` }));
