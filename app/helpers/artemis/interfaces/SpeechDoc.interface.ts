import { MaybeDocument } from 'nano';
import Dictionary from '../../../interfaces/Dictionary.interface';

export default interface SpeechDoc extends MaybeDocument {
    greetings: string[];
    predictions: string[];
    reactions: Dictionary<string>;
    responses: Dictionary<string>;
    welcomes: string[];
}
