import { readdirSync, readFileSync } from 'fs-extra';

export default {
    get: (path: string) => readFileSync(path),
    getList: (path: string) => readdirSync(path)
};
