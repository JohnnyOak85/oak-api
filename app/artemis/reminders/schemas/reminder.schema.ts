import { boolean, number, object, string } from '../../../shared';

export const ReminderSchema = {
    payload: object().keys({
        done: boolean(),
        event: string(),
        id: string(),
        image: string().uri(),
        memberId: string(),
        timestamp: number().required(),
        type: string().valid('birthday', 'celebration', 'release').required(),
        url: string().uri()
    })
};
