import { certificates } from '../../../paths';
import { getVariables } from '../environment';
import { getFile } from '../local';

export const buildCertification = () => {
    const { certificate } = getVariables();

    return {
        key: getFile(`${certificates}/${certificate}-key.pem`),
        cert: getFile(`${certificates}/${certificate}-cert.pem`)
    };
};

export const getCertifications = () => {
    const { certificate } = getVariables();

    return {
        key: getFile(`${certificates}/${certificate}-key.pem`),
        cert: getFile(`${certificates}/${certificate}-cert.pem`)
    };
};
