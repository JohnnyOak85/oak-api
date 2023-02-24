import paths from '../../../paths';
import files from '../../tools/files';
import ErrorHandler from '../../tools/error';

export const buildMainPage = () => {
    try {
        return files.get(`${paths.resources}/pages/main.html`).toString('utf8');
    } catch (error) {
        throw ErrorHandler.wrap(error, 'buildMainPage');
    }
};
