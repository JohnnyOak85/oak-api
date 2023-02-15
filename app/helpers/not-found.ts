import paths from '../../paths';
import { getFile, getFileList } from './files';
import math from '../tools/math';

export const buildNotFoundPage = () => {
    try {
        const path = `${paths.resources}/not-found`;
        const files = getFileList(path);
        const image = getFile(`${path}/${files[math.random(files.length) - 1]}`).toString('base64');
        const page = getFile(`${paths.resources}/pages/not-found.html`).toString('utf8');

        return page.replace('§source', image);
    } catch (error) {
        console.log(error);
    }
};
