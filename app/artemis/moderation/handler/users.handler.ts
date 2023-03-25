import { getData, logInfo, putData, wrapError } from '../../../shared';
import { UserDoc } from '../types';

type Params = {
    id: string;
};

const DB_NAME = 'artemis';
const PREFIX = 'member';

export const getUser = async ({ id }: Params) => {
    try {
        logInfo('artemis:moderation', `Getting user ${id}`);

        return getData<UserDoc>(DB_NAME, `${PREFIX}_${id}`);
    } catch (error) {
        throw wrapError(error, 'getUser');
    }
};

export const putUser = async (user: UserDoc) => {
    try {
        if (!user.id) {
            user.id = `${PREFIX}_${user.id}`;
        }

        logInfo('artemis:moderation', `Putting user ${user.id}`);

        return putData<UserDoc>(DB_NAME, user.id, user);
    } catch (error: any) {
        throw wrapError(error, 'putUser');
    }
};
