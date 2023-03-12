import { getNews } from '../handlers';

export const routes = [
    {
        method: 'GET',
        path: '/news/gaming',
        handler: getNews
    }
];
