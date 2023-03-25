import { logInfo, wrapError } from '../../../shared';
import { getData } from '../../helpers';
import { StoryDoc } from '../types';
import { DB_NAME } from '../shared';

export const getBlocks = async () => {
    try {
        logInfo('artemis:story', 'Getting story blocks');

        const { blocks } = await getData<StoryDoc>(DB_NAME, 'story');
        return blocks;
    } catch (error) {
        throw wrapError(error, 'getBlocks');
    }
};

export const getDecorators = async () => {
    try {
        logInfo('artemis:story', 'Getting story decorators');

        const { decorators } = await getData<StoryDoc>(DB_NAME, 'story');
        return decorators;
    } catch (error) {
        throw wrapError(error, 'getDecorators');
    }
};
