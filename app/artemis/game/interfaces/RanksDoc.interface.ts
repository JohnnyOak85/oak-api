import Dictionary from '../../../interfaces/Dictionary.interface';

type RankData = {
    chance: number;
    class: string;
    color: string;
    index: number;
    title: string;
};

type RanksDoc = Dictionary<RankData[]>;

export default RanksDoc;
