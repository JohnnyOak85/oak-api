import { Dictionary } from '../../../shared';

export type StoryDoc = {
    blocks: string[][];
    decorators: Dictionary<string[]>;
};
