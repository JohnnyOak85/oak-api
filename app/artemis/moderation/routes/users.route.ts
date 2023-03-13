import { addPrefix, buildRouteHandler } from '../../../shared';
import { getUser, putUser } from '../handler';
import { UserIdSchema, UserSchema } from '../schemas';

const prefix = 'users';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getUser, 'query'),
            options: {
                validate: {
                    query: UserIdSchema
                }
            }
        },
        {
            method: 'PUT',
            path: '',
            handler: buildRouteHandler(putUser, 'payload'),
            options: {
                validate: {
                    payload: UserSchema
                }
            }
        }
    ],
    prefix
);
