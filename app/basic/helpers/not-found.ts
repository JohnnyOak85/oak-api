import { Calculator, ErrorHandler, FileHandler, PathHandler } from '../../tools';

export const buildNotFoundPage = () => {
    try {
        const path = `${PathHandler.resources}/not-found`;
        const list = FileHandler.getList(path);
        const image = FileHandler.get(
            `${path}/${list[Calculator.random(list.length) - 1]}`
        ).toString('base64');
        const page = FileHandler.get(`${PathHandler.resources}/pages/not-found.html`).toString(
            'utf8'
        );

        return page.replace('§source', image);
    } catch (error) {
        throw ErrorHandler.wrap(error, 'buildNotFoundPage');
    }
};
