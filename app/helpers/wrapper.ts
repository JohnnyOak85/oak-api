import { ResponseToolkit } from '@hapi/hapi';

type Handler = () => Promise<any>;

const wrapper = async ({ pathname }: URL, h: ResponseToolkit, handler: Handler) => {
    console.log('CALL TO ->', pathname);

    return h.response(await handler());
};

export default wrapper;
