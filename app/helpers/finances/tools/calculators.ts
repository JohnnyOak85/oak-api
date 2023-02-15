import math from '../../../tools/math';
import { YEARLY_HOLIDAYS } from './constants';
import { getTotalIRSCut, getPartialIRSCut } from './irs';
import { getSSCut } from './social_security';

const TOTAL_MONTHS = 12;

export const calculateTotal = (entries: number[]) =>
    entries.reduce((accumulated, entry) => accumulated + entry, 0);

export const calculateLiquidWage = async (grossWage: number, applyPreviousRank: boolean) => {
    const totalHolidayPay = math.round(grossWage / TOTAL_MONTHS) * YEARLY_HOLIDAYS;
    const totalPay = grossWage + totalHolidayPay;

    const IRSCut = await getTotalIRSCut(grossWage, applyPreviousRank);
    const SSCut = getSSCut(totalPay);
    const holidayCut = await getPartialIRSCut(
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
