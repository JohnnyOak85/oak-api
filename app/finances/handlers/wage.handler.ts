import { ServerRequest, ServerResponse, wrapError } from '../../shared';
import { calcMonthlyWage } from '../helpers';
import { WageInfo } from '../interfaces';

export const getLiquidWageHandler = async (request: ServerRequest, h: ServerResponse) => {
    try {
        return h.response(await calcMonthlyWage(request.query as WageInfo));
    } catch (error) {
        throw wrapError(error, 'getLiquidWageHandler');
    }
};
