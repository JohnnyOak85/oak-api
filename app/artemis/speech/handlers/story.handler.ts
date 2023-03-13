import { getDoc, wrapError } from '../../../shared';
import { StoryDoc } from '../interfaces';
import { DB_NAME } from '../shared';

export const getBlocks = async () => {
    try {
        const { blocks } = await getDoc<StoryDoc>(DB_NAME, 'story');
        return blocks;
    } catch (error) {
        throw wrapError(error, 'getBlocks');
    }
};

export const getDecorators = async () => {
    try {
        const { decorators } = await getDoc<StoryDoc>(DB_NAME, 'story');
        return decorators;
    } catch (error) {
        throw wrapError(error, 'getDecorators');
    }
};
