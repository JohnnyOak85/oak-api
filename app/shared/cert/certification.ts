import { getFile, getVariables } from '..';
import { certsPath } from '../../../paths';

export const getCertifications = () => {
    const { certificate } = getVariables();

    return {
        key: getFile(`${certsPath}/${certificate}-key.pem`),
        cert: getFile(`${certsPath}/${certificate}-cert.pem`)
    };
};
