import { Dictionary } from '../../../shared';

export type PlayerDoc = {
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
