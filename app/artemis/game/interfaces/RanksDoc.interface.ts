import { Dictionary } from '../../../shared';

type RankData = {
    chance: number;
    color: string;
    index: number;
    title: string;
};

export type RanksDoc = Dictionary<RankData[]>;
