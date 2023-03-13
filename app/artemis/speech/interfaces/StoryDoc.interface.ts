import { MaybeDocument } from 'nano';
import { Dictionary } from '../../../shared';

export interface StoryDoc extends MaybeDocument {
    blocks: string[][];
    decorators: Dictionary<string[]>;
}
