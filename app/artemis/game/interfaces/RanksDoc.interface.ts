import Dictionary from '../../../interfaces/Dictionary.interface';

type RankData = {
    chance: number;
    color: string;
    index: number;
    title: string;
};

type RanksDoc = Dictionary<RankData[]>;

export default RanksDoc;
