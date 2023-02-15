export default {
    random: (max = 100, min = 1) => Math.floor(Math.random() * (max - min + 1) + min),
    round: (num: number, places = 2) => {
        const basePower = Math.pow(10, places);

        return Math.round(num * basePower) / basePower;
    }
};
