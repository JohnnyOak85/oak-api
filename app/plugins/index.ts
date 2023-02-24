import basic from './basic.plugin';
import artemis from './artemis';
import homeManager from './home-manager';

export default [basic, ...artemis, ...homeManager];
