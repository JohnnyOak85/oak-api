import paths from '../../paths';
import environment from '../tools/environment';
import { getFile } from './files';

export const buildCertification = () => {
    const { certificate } = environment.get();

    return {
        key: getFile(`${paths.certificates}/${certificate}-key.pem`),
        cert: getFile(`${paths.certificates}/${certificate}-cert.pem`)
    };
};
