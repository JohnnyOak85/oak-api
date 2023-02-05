import { round } from '../math';
import { TOTAL_MONTHS, YEARLY_HOLIDAYS } from './constants';
import { getTotalIRSCut, getPartialIRSCut } from './irs';
import { getSSCut } from './social_security';

export const calculateTotal = (entries: number[]) =>
    entries.reduce((accumulated, entry) => accumulated + entry, 0);

export const calculateLiquidWage = (grossWage: number) => {
    const totalHolidayPay = round(grossWage / TOTAL_MONTHS) * YEARLY_HOLIDAYS;
    const totalPay = grossWage + totalHolidayPay;

    const IRSCut = getTotalIRSCut(grossWage);
    const SSCut = getSSCut(totalPay);
    const holidayCut = getPartialIRSCut(
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
