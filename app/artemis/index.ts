import game from './game/plugins';
import reminders from './reminders/plugins/reminders.plugin';
import speech from './speech/plugins';

export default [...game, reminders, ...speech];
