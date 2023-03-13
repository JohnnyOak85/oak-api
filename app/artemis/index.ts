import users from './moderation/plugins/user.plugin';
import reminders from './reminders/plugins/reminders.plugin';
import speech from './speech/plugins';

export default [reminders, ...speech, users];
