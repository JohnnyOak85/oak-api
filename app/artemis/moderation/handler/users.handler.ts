import { wrapError } from '../../../shared';
import { getData, putData } from '../../helpers';
import { UserDoc } from '../types';

type Params = {
    id: string;
};

const DB_NAME = 'artemis';
const PREFIX = 'member';

export const getUser = async ({ id }: Params) => {
    try {
        return getData<UserDoc>(DB_NAME, `${PREFIX}_${id}`);
    } catch (error) {
        throw wrapError(error, 'getUser');
    }
};

export const putUser = async (user: UserDoc) => {
    try {
        console.log(user);

        if (!user.id) {
            user.id = `${PREFIX}_${user.id}`;
        }

        return putData<UserDoc>(DB_NAME, user.id, user);
    } catch (error: any) {
        throw wrapError(error, 'putUser');
    }
};
