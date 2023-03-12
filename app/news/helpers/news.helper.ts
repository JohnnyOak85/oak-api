import Axios from 'axios';
import { Environment, ErrorHandler, StorageHandler } from '../../tools';
import { NewsConfigDoc, NewsResponse } from '../interfaces';

const DB_NAME = 'news';
const client = Axios.create();

export const getNews = async () => {
    try {
        const { newsApi, newsApiKey } = Environment.get();
        const { daily } = await StorageHandler.get<NewsConfigDoc>(DB_NAME, 'config');

        const headers = { 'x-api-key': newsApiKey };
        const params = daily.gaming;

        const { data } = await client.get<NewsResponse>(newsApi, { headers, params });

        return data.articles;
    } catch (error: any) {
        if (error.response?.data) {
            throw ErrorHandler.wrap(error, 'getNews', {
                message: error.response.data.message,
                statusCode: error.response.status
            });
        }
        throw ErrorHandler.wrap(error, 'getNews');
    }
};
