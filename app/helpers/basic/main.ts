import paths from '../../../paths';
import files from '../../tools/files';

export const buildMainPage = () => files.get(`${paths.resources}/pages/main.html`).toString('utf8');
