import { MaybeDocument } from 'nano';
import { Dictionary } from '../../../shared';

export interface RepliesDoc extends MaybeDocument {
    greetings: string[];
    predictions: string[];
    reactions: Dictionary<string>;
    responses: Dictionary<string>;
    welcomes: string[];
}
