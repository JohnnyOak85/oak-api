import { logsPath } from '../../../paths';
import { getFile } from '../../shared';

export const getLog = () => getFile(`${logsPath}/log.txt`).toString('utf8').split('\n');
