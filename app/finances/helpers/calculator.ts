import { Dictionary, getDoc, round } from '../../shared';

type IRSRanks = Dictionary<number>;

type WageInfo = {
    benefit?: number;
    meal?: number;
    wage: number;
};

const MEAL_DAYS = 19;
const TOTAL_MONTHS = 12;
const FINANCE_MONTHS = 14;
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

export const calcLiquidWage = async (grossWage: number, applyPreviousRank = false) => {
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

export const calcMonthlyWage = async ({ benefit = 0, meal = 0, wage }: WageInfo) => {
    const mealWage = meal * MEAL_DAYS;
    const yearMeal = mealWage * TOTAL_MONTHS;
    const yearBenefit = benefit * TOTAL_MONTHS;
    const monthWage = (wage - yearBenefit - yearMeal) / FINANCE_MONTHS;

    const { liquidWage } = await calcLiquidWage(monthWage);

    return {
        benefit: round(benefit),
        meal: round(mealWage),
        wage: round(liquidWage),
        total: round(liquidWage + mealWage + benefit)
    };
};
