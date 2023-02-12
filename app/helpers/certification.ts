import paths from '../../paths';
import { getEnvironment } from './environment';
import { getFile } from './files';

export const buildCertification = () => {
    const { certificate } = getEnvironment();

    return {
        key: getFile(`${paths.certificates}/${certificate}-key.pem`),
        cert: getFile(`${paths.certificates}/${certificate}-cert.pem`)
    };
};
