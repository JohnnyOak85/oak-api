import artemis from '../artemis';
import basic from '../basic/plugins/basic.plugin';
import finances from '../finances';
import news from '../news';

export default [...artemis, basic, ...finances, ...news];
