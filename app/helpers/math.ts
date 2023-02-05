export const round = (num: number, places = 2) => {
    const basePower = Math.pow(10, places);

    return Math.round(num * basePower) / basePower;
};

export const getRandom = (max = 100, min = 1) => Math.floor(Math.random() * (max - min + 1) + min);
