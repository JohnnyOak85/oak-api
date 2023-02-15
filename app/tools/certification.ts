import paths from '../../paths';
import environment from './environment';
import files from './files';

export const buildCertification = () => {
    const { certificate } = environment.get();

    return {
        key: files.get(`${paths.certificates}/${certificate}-key.pem`),
        cert: files.get(`${paths.certificates}/${certificate}-cert.pem`)
    };
};

export default {
    get: () => {
        const { certificate } = environment.get();

        return {
            key: files.get(`${paths.certificates}/${certificate}-key.pem`),
            cert: files.get(`${paths.certificates}/${certificate}-cert.pem`)
        };
    }
};
