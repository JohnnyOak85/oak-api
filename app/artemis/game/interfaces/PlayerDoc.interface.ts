import Dictionary from '../../../interfaces/Dictionary.interface';

type PlayerDoc = {
    achievements: string[];
    attributes: Dictionary<number>;
    attack: number;
    bestiary: string[];
    defense: number;
    health: number;
    level: number;
    losses: number;
    luck: number;
    messages: number;
    name: string;
    rank: string;
    wins: number;
};

export default PlayerDoc;
