import { Request, ResponseToolkit } from '@hapi/hapi';

type Handler = (args?: any) => Promise<any> | any;

const wrapper = async ({ method, payload, url }: Request, h: ResponseToolkit, handler: Handler) => {
    console.log(`${method} -> ${url.pathname}`);

    return h.response(await handler(payload));
};

export default wrapper;
