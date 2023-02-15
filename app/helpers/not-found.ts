import paths from '../../paths';
import files from '../tools/files';
import math from '../tools/math';

export const buildNotFoundPage = () => {
    try {
        const path = `${paths.resources}/not-found`;
        const list = files.getList(path);
        const image = files.get(`${path}/${list[math.random(list.length) - 1]}`).toString('base64');
        const page = files.get(`${paths.resources}/pages/not-found.html`).toString('utf8');

        return page.replace('§source', image);
    } catch (error) {
        console.log(error);
    }
};
