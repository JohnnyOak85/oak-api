import { MaybeDocument } from 'nano';

export interface UserDoc extends MaybeDocument {
    id?: string;
    nickname: string;
    roles: string[];
    warnings?: string[];
}
