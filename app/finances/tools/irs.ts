import Dictionary from '../../interfaces/Dictionary.interface';
import { Storage } from '../../tools';
import { YEARLY_HOLIDAYS } from './constants';

type IRSRanks = Dictionary<number>;

const getIRSRetentionRanks = (ranks: IRSRanks) => Object.keys(ranks).map(key => Number(key));

const findIRSPercentage = async (wage: number, applyPreviousRank = false) => {
    const doc = await Storage.get<IRSRanks>('finances', 'irs_retention');
    const ranks = getIRSRetentionRanks(doc);

    let percentage = 0;
    let previous = ranks[0];

    for (const rank of ranks) {
        if (wage <= rank) {
            percentage = applyPreviousRank ? doc[previous] : doc[rank];
            break;
        }

        previous = rank;
    }

    return percentage;
};

export const getTotalIRSCut = async (wage: number, applyPreviousRank: boolean) =>
    Math.trunc(wage * (await findIRSPercentage(wage, applyPreviousRank)));

export const getPartialIRSCut = async (liquidWage: number, grossHolidayWage: number) =>
    Math.trunc(grossHolidayWage * (await findIRSPercentage(liquidWage))) * YEARLY_HOLIDAYS;
