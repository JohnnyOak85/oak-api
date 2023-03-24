import { object, string } from '../../../shared';

export const AreaSchema = {
    payload: object().keys({
        currentArea: string().required().description('The code for a valid game area.')
    })
};
