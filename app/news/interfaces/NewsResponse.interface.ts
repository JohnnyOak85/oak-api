import { ISO_3166_1_ALPHA_2, ISO_639_1 } from '../../shared';
import { Topic } from '../types';

interface Article {
    author: string;
    authors: string;
    clean_url: string;
    country: string;
    excerpt: string;
    is_opinion: boolean;
    language: string;
    link: string;
    media: string;
    published_date: string;
    published_date_precision: string;
    rank: number;
    rights: string;
    summary: string;
    title: string;
    topic: string;
    twitter_account: string;
}

interface UserInput {
    lang: ISO_639_1[];
    not_lang: ISO_639_1[];
    countries: ISO_3166_1_ALPHA_2[];
    not_countries: ISO_3166_1_ALPHA_2[];
    page: number;
    size: number;
    sources: string[];
    not_sources: string[];
    topic: Topic;
    from: string;
}

export interface NewsResponse {
    status: string;
    total_hits: number;
    page: number;
    total_pages: number;
    page_size: number;
    user_input: UserInput;
    articles: Article[];
}
