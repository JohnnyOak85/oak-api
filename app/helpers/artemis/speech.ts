import { MaybeDocument } from 'nano';
import Dictionary from '../../shared/Dictionary.interface';
import storage from '../../storage/storage';
import log from '../../tools/log';

interface SpeechDoc extends MaybeDocument {
    greetings: string[];
    predictions: string[];
    reactions: Dictionary<string>;
    responses: Dictionary<string>;
    welcomes: string[];
}

const DB_NAME = 'artemis';

export const getGreetings = async () => {
    try {
        const { greetings } = await storage.get<SpeechDoc>(DB_NAME, 'speech');
        return greetings;
    } catch (error) {
        log.error(error, 'getGreetings');
        throw error;
    }
};

export const getPredictions = async () => {
    try {
        const { predictions } = await storage.get<SpeechDoc>(DB_NAME, 'speech');
        return predictions;
    } catch (error) {
        log.error(error, 'getPredictions');
        throw error;
    }
};

export const getReactions = async () => {
    try {
        const { reactions } = await storage.get<SpeechDoc>(DB_NAME, 'speech');
        return reactions;
    } catch (error) {
        log.error(error, 'getReactions');
        throw error;
    }
};

export const getResponses = async () => {
    try {
        const { responses } = await storage.get<SpeechDoc>(DB_NAME, 'speech');
        return responses;
    } catch (error) {
        log.error(error, 'getResponses');
        throw error;
    }
};
