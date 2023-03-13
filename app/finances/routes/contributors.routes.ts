import { addPrefix, buildRouteHandler } from '../../shared';
import { getContributors } from '../handlers';

const prefix = 'contributors';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getContributors)
        }
    ],
    prefix
);
