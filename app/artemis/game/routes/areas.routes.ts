import { addPrefix, buildRouteHandler } from '../../../shared';
import {
    getAreaData,
    getAreaMonsters,
    getAreaName,
    getCurrentArea,
    setCurrentArea
} from '../handlers';
import { AreaSchema } from '../schemas';

const prefix = 'areas';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getCurrentArea)
        },
        {
            method: 'GET',
            path: '/data',
            handler: buildRouteHandler(getAreaData)
        },
        {
            method: 'GET',
            path: '/list',
            handler: buildRouteHandler(getAreaMonsters)
        },
        {
            method: 'GET',
            path: '/name',
            handler: buildRouteHandler(getAreaName)
        },
        {
            method: 'PUT',
            path: '',
            handler: buildRouteHandler(setCurrentArea, 'payload'),
            options: {
                validate: {
                    payload: AreaSchema
                }
            }
        }
    ],
    prefix
);
