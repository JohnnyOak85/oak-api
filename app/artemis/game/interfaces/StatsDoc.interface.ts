type StatsDoc = {
    attributes: {
        max: number;
        maxGain: number;
    };
    battle: {
        damageControl: number;
        doubleChance: number;
        missChance: number;
    };
    defaultName: string;
    health: {
        base: number;
        cap: number;
        maxControl: number;
        maxDivisor: number;
        minControl: number;
        minDivisor: number;
    };
    level: {
        minDecrement: number;
        max: number;
        maxMultiplier: number;
    };
    luck: {
        cap: number;
        chance: number;
        max: number;
        multiplier: number;
    };
    stat: {
        base: number;
        cap: number;
        control: number;
        divider: number;
        maxMultiplier: number;
        minIncrement: number;
    };
};

export default StatsDoc;
