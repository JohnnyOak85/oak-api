import { ErrorHandler, FileHandler, PathHandler } from '../../tools';

export const getLogFile = () => {
    try {
        const page = FileHandler.get(`${PathHandler.resources}/pages/log.html`).toString('utf8');
        const log = FileHandler.get(`${PathHandler.logs}/log.txt`)
            .toString('utf8')
            .split('\n')
            .map(line => `<p>${line.replace('\r', '')}</p>`)
            .join('');

        return page.replace('§log', log);
    } catch (error) {
        throw ErrorHandler.wrap(error, 'getLogFile');
    }
};
