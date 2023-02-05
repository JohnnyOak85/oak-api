import paths from '../../paths';
import { getEnvironmentVariables } from './environment';
import { getFile } from './files';

export const buildCertification = () => {
    const { certificate } = getEnvironmentVariables();

    return {
        key: getFile(`${paths.certificates}/${certificate}-key.pem`),
        cert: getFile(`${paths.certificates}/${certificate}-cert.pem`)
    };
};
