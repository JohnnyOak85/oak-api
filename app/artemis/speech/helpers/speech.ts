import storage from '../../../storage/storage';
import ErrorHandler from '../../../tools/error';
import SpeechDoc from '../interfaces/SpeechDoc.interface';
import DB_NAME from '../shared/DB_NAME';

const getSpeechDoc = () => storage.get<SpeechDoc>(DB_NAME, 'speech');

export const getGreetings = async () => {
    try {
        const { greetings } = await getSpeechDoc();
        return greetings;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getGreetings');
    }
};

export const getPredictions = async () => {
    try {
        const { predictions } = await getSpeechDoc();
        return predictions;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getPredictions');
    }
};

export const getReactions = async () => {
    try {
        const { reactions } = await getSpeechDoc();
        return reactions;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getReactions');
    }
};

export const getResponses = async () => {
    try {
        const { responses } = await getSpeechDoc();
        return responses;
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getResponses');
    }
};
