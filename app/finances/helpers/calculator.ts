import { Dictionary, getDoc, round } from '../../shared';

type IRSRanks = Dictionary<number>;

const TOTAL_MONTHS = 12;
const YEARLY_HOLIDAYS = 2;

// Social Security
const SOCIAL_SECURITY_PERCENTAGE = 0.11; // TODO Save in database

const calcSocialSecurityCut = (wage: number) =>
    round(wage * SOCIAL_SECURITY_PERCENTAGE, YEARLY_HOLIDAYS);

// IRS
const getIRSRetentionRanks = (ranks: IRSRanks) => Object.keys(ranks).map(key => Number(key));

const findIRSPercentage = async (wage: number, applyPreviousRank = false) => {
    const doc = await getDoc<IRSRanks>('finances', 'irs_retention');
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

const calcTotalIRSCut = async (wage: number, applyPreviousRank: boolean) =>
    Math.trunc(wage * (await findIRSPercentage(wage, applyPreviousRank)));

const calcPartialIRSCut = async (liquidWage: number, grossHolidayWage: number) =>
    Math.trunc(grossHolidayWage * (await findIRSPercentage(liquidWage))) * YEARLY_HOLIDAYS;

export const calcLiquidWage = async (grossWage: number, applyPreviousRank: boolean) => {
    const totalHolidayPay = round(grossWage / TOTAL_MONTHS) * YEARLY_HOLIDAYS;
    const totalPay = grossWage + totalHolidayPay;

    const IRSCut = await calcTotalIRSCut(grossWage, applyPreviousRank);
    const SSCut = calcSocialSecurityCut(totalPay);
    const holidayCut = await calcPartialIRSCut(
        grossWage - IRSCut - SSCut,
        totalHolidayPay / YEARLY_HOLIDAYS
    );

    // TODO Save IRS cuts for later use.
    const IRSCuts = IRSCut + holidayCut;

    return {
        IRSCuts,
        liquidWage: totalPay - IRSCuts - SSCut,
        SSCut
    };
};

export const calcTotal = (entries: number[]) =>
    entries.reduce((accumulated, entry) => accumulated + entry, 0);
