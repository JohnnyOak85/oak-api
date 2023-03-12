import { readdirSync, readFileSync } from 'fs-extra';

export const getFile = (path: string) => readFileSync(path);
export const getFileList = (path: string) => readdirSync(path);
