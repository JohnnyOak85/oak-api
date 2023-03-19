import { object, string } from '../../app/shared';

export const PayloadSchema = {
    payload: object()
        .keys({
            id: string().required().description('Id of the value to store.')
        })
        .options({ allowUnknown: true })
        .required()
};
