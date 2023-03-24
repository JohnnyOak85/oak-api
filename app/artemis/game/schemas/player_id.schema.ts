import { object, string } from '../../../shared';

export const PlayerIdSchema = {
    params: object().keys({
        id: string().required().description('Id string of the player you want to find')
    })
};
