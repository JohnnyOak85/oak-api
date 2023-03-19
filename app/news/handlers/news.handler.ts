import { get, getDoc, getVariables, wrapError } from '../../shared';
import { NewsConfigDoc, NewsResponse } from '../interfaces';

const DB_NAME = 'news';

export const getDailyGamingNews = async () => {
    try {
        const { newsApi, newsApiKey } = getVariables();
        const { daily } = await getDoc<NewsConfigDoc>(DB_NAME, 'config');
        const { data } = await get<NewsResponse>({
            headers: { 'x-api-key': newsApiKey },
            params: daily.gaming,
            url: newsApi
        });

        return data.articles;
    } catch (error: any) {
        throw wrapError(error, 'getNews');
    }
};
