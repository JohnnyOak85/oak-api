import { readdirSync, readFileSync } from 'fs-extra';

export const getTextFile = (path: string) => readFileSync(path).toString().split('\n');
export const getFileList = (path: string) => readdirSync(path);
export const getFile = (path: string) => readFileSync(path);
