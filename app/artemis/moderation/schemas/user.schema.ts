import { array, object, string } from '../../../shared';

export const UserSchema = {
    payload: object().keys({
        _id: string(),
        _rev: string(),
        id: string(),
        nickname: string(),
        roles: array().items(string()),
        warnings: array().items(string())
    })
};
