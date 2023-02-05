import { YEARLY_HOLIDAYS } from './constants';

// TODO Turn this into a map
export const IRS_RETENTION_MAP: { [x: number]: number } = {
    710: 0,
    720: 0.018,
    740: 0.045,
    754: 0.063,
    814: 0.079,
    922: 0.101,
    1005: 0.113,
    1065: 0.121,
    1143: 0.131,
    1225: 0.141,
    1321: 0.152,
    1424: 0.162,
    1562: 0.173,
    1711: 0.186,
    1870: 0.199,
    1977: 0.209,
    2090: 0.219,
    2218: 0.228,
    2367: 0.238,
    2535: 0.248,
    3104: 0.27,
    3534: 0.286,
    4118: 0.297
};

const getIRSRetentionRanks = () => Object.keys(IRS_RETENTION_MAP).map(key => Number(key));

const findIRSPercentage = (wage: number) => {
    const ranks = getIRSRetentionRanks();
    let percentage = 1;

    for (const rank of ranks) {
        if (wage <= rank) {
            percentage = IRS_RETENTION_MAP[rank];
            break;
        }
    }

    return percentage;
};

export const getTotalIRSCut = (wage: number) => Math.trunc(wage * findIRSPercentage(wage));

export const getPartialIRSCut = (liquidWage: number, grossHolidayWage: number) =>
    Math.trunc(grossHolidayWage * findIRSPercentage(liquidWage)) * YEARLY_HOLIDAYS;
