import { MaybeDocument } from 'nano';
import { Dictionary, ISO_3166_1_ALPHA_2, ISO_639_1 } from '../../shared';
import { Time, Topic } from '../types';

type NewsConfig = {
    when?: Time;
    lang?: ISO_639_1;
    not_lang?: ISO_639_1;
    not_countries?: ISO_3166_1_ALPHA_2;
    not_sources?: string;
    sources?: string;
    page?: number;
    page_size?: number;
    topic?: Topic;
    ranked_only?: string;
    outlet_name?: string;
    enable_parse_date?: string;
    countries?: ISO_3166_1_ALPHA_2;
};

export interface NewsConfigDoc extends MaybeDocument {
    daily: Dictionary<NewsConfig>;
}
