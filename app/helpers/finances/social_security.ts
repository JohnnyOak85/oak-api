import { round } from '../math';
import { YEARLY_HOLIDAYS } from './constants';

const SOCIAL_SECURITY_PERCENTAGE = 0.11;

export const getSSCut = (wage: number) => round(wage * SOCIAL_SECURITY_PERCENTAGE, YEARLY_HOLIDAYS);
