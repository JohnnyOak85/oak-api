import Axios from 'axios';
import { Dictionary } from '../interfaces';

type RequestOptions = {
    headers?: Dictionary<string>;
    params?: Dictionary<any>;
    url: string;
};

const client = Axios.create();

export const get = <T>({ url, ...options }: RequestOptions) => client.get<T>(url, options);
