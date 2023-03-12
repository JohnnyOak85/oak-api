import { certsPath, getFile, getVariables } from '..';

export const buildCertification = () => {
    const { certificate } = getVariables();

    return {
        key: getFile(`${certsPath}/${certificate}-key.pem`),
        cert: getFile(`${certsPath}/${certificate}-cert.pem`)
    };
};

export const getCertifications = () => {
    const { certificate } = getVariables();

    return {
        key: getFile(`${certsPath}/${certificate}-key.pem`),
        cert: getFile(`${certsPath}/${certificate}-cert.pem`)
    };
};
