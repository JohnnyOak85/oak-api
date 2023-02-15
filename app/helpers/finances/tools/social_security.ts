import { YEARLY_HOLIDAYS } from './constants';
import math from '../../../tools/math';

const SOCIAL_SECURITY_PERCENTAGE = 0.11;

export const getSSCut = (wage: number) =>
    math.round(wage * SOCIAL_SECURITY_PERCENTAGE, YEARLY_HOLIDAYS);
