import { getDebtsHandler } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/debts',
        handler: getDebtsHandler
    }
];
