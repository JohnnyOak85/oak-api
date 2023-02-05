import { ResponseToolkit } from '@hapi/hapi';

const wrapper = ({ pathname }: URL, response: ResponseToolkit, handler: any) => {
    console.log('CALL TO ->', pathname);

    return response.response(handler).header('Access-Control-Allow-Origin', '*');
};

export default wrapper;
