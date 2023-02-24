import StoryDoc from '../interfaces/StoryDoc.interface';
import DB_NAME from '../shared/DB_NAME';
import { ErrorHandler, Storage } from '../../../tools';

export const getBlocks = async () => {
    try {
        const { blocks } = await Storage.get<StoryDoc>(DB_NAME, 'story');
        return blocks;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getBlocks');
    }
};

export const getDecorators = async () => {
    try {
        const { decorators } = await Storage.get<StoryDoc>(DB_NAME, 'story');
        return decorators;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getDecorators');
    }
};
