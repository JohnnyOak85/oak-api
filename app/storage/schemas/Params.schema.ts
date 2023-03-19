import { object, string, ValidDatabases } from '../../shared';

export const ParamsSchema = {
    params: object().keys({
        db: string()
            .valid(...ValidDatabases)
            .required()
    })
};
