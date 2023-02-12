import { boolean, number, object, string } from 'joi';

export default object({
    _id: string(),
    _rev: string(),
    done: boolean(),
    event: string(),
    image: string(),
    memberId: string(),
    timestamp: number().required(),
    type: string().valid('birthday', 'celebration', 'release').required(),
    url: string()
});
