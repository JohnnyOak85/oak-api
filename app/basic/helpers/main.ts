import { ErrorHandler, FileHandler, PathHandler } from '../../tools';

export const buildMainPage = () => {
    try {
        return FileHandler.get(`${PathHandler.resources}/pages/main.html`).toString('utf8');
    } catch (error) {
        throw ErrorHandler.wrap(error, 'buildMainPage');
    }
};
