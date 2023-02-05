import { RESOURCES_PATH } from '../../paths';
import { getFile, getFileList } from './files';
import { getRandom } from './math';

export const buildNotFoundPage = () => {
    try {
        const path = `${RESOURCES_PATH}/not-found`;
        const files = getFileList(path);
        const image = getFile(`${path}/${files[getRandom(files.length) - 1]}`).toString('base64');
        const page = getFile(`${RESOURCES_PATH}/pages/not-found.html`).toString('utf8');

        return page.replace('§source', image);
    } catch (error) {
        console.log(error);
    }
};
