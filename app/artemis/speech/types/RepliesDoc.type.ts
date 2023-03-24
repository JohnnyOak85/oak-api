import { Dictionary } from '../../../shared';

export type RepliesDoc = {
    greetings: string[];
    predictions: string[];
    reactions: Dictionary<string>;
    responses: Dictionary<string>;
    welcomes: string[];
};
