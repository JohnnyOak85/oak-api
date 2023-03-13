import { resourcesPath } from '../../../paths';
import { getFile } from '../../shared';

export const getMainPage = () => getFile(`${resourcesPath}/pages/main.html`).toString('utf8');
