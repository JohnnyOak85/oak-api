import storage from '../../storage/storage';
import log from '../../tools/log';
import StoryDoc from './interfaces/StoryDoc.interface';
import DB_NAME from './shared/DB_NAME';

export const getBlocks = async () => {
    try {
        const { blocks } = await storage.get<StoryDoc>(DB_NAME, 'story');
        return blocks;
    } catch (error) {
        log.error(error, 'getBlocks');
        throw error;
    }
};

export const getDecorators = async () => {
    try {
        const { decorators } = await storage.get<StoryDoc>(DB_NAME, 'story');
        return decorators;
    } catch (error) {
        log.error(error, 'getDecorators');
        throw error;
    }
};
