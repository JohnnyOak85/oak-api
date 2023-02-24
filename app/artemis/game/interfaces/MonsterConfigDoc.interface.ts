import Dictionary from '../../../../interfaces/Dictionary.interface';

type MonsterChance = {
    base: number;
    mid: number;
    high: number;
};

type MonsterRank = {
    base: number;
    mid: number;
    high: number;
    boss: number;
};

type MonsterDescriptions = Dictionary<string>;

export default interface MonsterConfig {
    chances: MonsterChance;
    classes: string[];
    colors: string[];
    descriptions: MonsterDescriptions;
    ranks: MonsterRank;
    variations: string[];
}
