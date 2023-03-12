import moment from 'moment';

const TIMESTAMP_FORMAT = 'YYYY-MM-DD HH:mm:ss:SSS';

export const getTimestamp = () => moment().format(TIMESTAMP_FORMAT);
