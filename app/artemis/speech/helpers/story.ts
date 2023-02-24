import storage from '../../../storage/storage';
import StoryDoc from '../interfaces/StoryDoc.interface';
import DB_NAME from '../shared/DB_NAME';
import ErrorHandler from '../../../tools/error';

export const getBlocks = async () => {
    try {
        const { blocks } = await storage.get<StoryDoc>(DB_NAME, 'story');
        return blocks;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getBlocks');
    }
};

export const getDecorators = async () => {
    try {
        const { decorators } = await storage.get<StoryDoc>(DB_NAME, 'story');
        return decorators;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getDecorators');
    }
};
