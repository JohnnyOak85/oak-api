import { getDoc, putDoc, wrapError } from '../../../shared';
import { UserDoc } from '../interfaces';

const DB_NAME = 'artemis';
const PREFIX = 'member';

export const getUser = async (id: string) => {
    try {
        return await getDoc<UserDoc>(DB_NAME, `${PREFIX}_${id}`);
    } catch (error) {
        throw wrapError(error, 'getUser');
    }
};

export const putUser = async (user: UserDoc) => {
    if (!user._id) {
        user._id = `${PREFIX}_${user.id}`;
    }

    delete user.id;

    try {
        const doc = await getDoc<UserDoc>(DB_NAME, `${PREFIX}_${user._id}`);

        return await putDoc<UserDoc>(DB_NAME, { ...doc, ...user });
    } catch (error: any) {
        if (error.statusCode === 404) {
            return await putDoc<UserDoc>(DB_NAME, user);
        }

        throw wrapError(error, 'putUser');
    }
};
