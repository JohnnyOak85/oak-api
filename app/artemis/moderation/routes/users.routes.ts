import { addPrefix, buildRouteHandler } from '../../../shared';
import { getUser, putUser } from '../handler';
import { UserIdSchema, UserSchema } from '../schemas';

const prefix = 'users';

export const routes = addPrefix(
    [
        {
            method: 'GET',
            path: '/{id}',
            handler: buildRouteHandler(getUser),
            options: {
                validate: UserIdSchema
            }
        },
        {
            method: 'PUT',
            path: '',
            handler: buildRouteHandler(putUser),
            options: {
                validate: UserSchema
            }
        }
    ],
    prefix
);
