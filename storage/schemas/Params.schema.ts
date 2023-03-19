import { object, string, ValidDatabases } from '../../app/shared';

export const ParamsSchema = {
    params: object().keys({
        db: string()
            .valid(...ValidDatabases)
            .required()
    })
};
