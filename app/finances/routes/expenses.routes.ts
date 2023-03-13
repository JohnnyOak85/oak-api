import { getExpensesHandler } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/expenses',
        handler: getExpensesHandler
    }
];
