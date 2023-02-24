import { MaybeDocument } from 'nano';
import Dictionary from '../../../interfaces/Dictionary.interface';

export default interface StoryDoc extends MaybeDocument {
    blocks: string[][];
    decorators: Dictionary<string[]>;
}
