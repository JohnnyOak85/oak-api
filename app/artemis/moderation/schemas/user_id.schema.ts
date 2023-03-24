import { object, string } from '../../../shared';

export const UserIdSchema = {
    params: object().keys({
        id: string().required().description('Id string of the user you want to find')
    })
};
