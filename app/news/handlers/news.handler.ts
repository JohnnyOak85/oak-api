import { get, getDoc, getVariables, ServerRequest, ServerResponse, wrapError } from '../../shared';
import { NewsConfigDoc, NewsResponse } from '../interfaces';

const DB_NAME = 'news';

export const getNews = async (request: ServerRequest, h: ServerResponse) => {
    try {
        const { newsApi, newsApiKey } = getVariables();
        const { daily } = await getDoc<NewsConfigDoc>(DB_NAME, 'config');
        const { data } = await get<NewsResponse>({
            headers: { 'x-api-key': newsApiKey },
            params: daily.gaming,
            url: newsApi
        });

        return h.response(data.articles);
    } catch (error: any) {
        if (error.response?.data) {
            throw wrapError(error, 'getNews', {
                message: error.response.data.message,
                statusCode: error.response.status
            });
        }

        throw wrapError(error, 'getNews');
    }
};
