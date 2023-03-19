import { addPrefix, buildRouteHandler } from '../../../shared';
import { getUser, putUser } from '../handler';
import { UserIdSchema, UserSchema } from '../schemas';

const prefix = 'users';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '',
            handler: buildRouteHandler(getUser),
            options: {
                validate: {
                    query: UserIdSchema
                }
            }
        },
        {
            method: 'PUT',
            path: '',
            handler: buildRouteHandler(putUser),
            options: {
                validate: {
                    payload: UserSchema
                }
            }
        }
    ],
    prefix
);
