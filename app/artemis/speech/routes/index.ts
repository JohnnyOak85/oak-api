import { addPrefix } from '../../../shared';
import { routes as QuirksRoutes } from './quirks.routes';
import { routes as QuotesRoutes } from './quotes.routes';
import { routes as SpeechRoutes } from './replies.routes';
import { routes as StoryRoutes } from './story.routes';

const prefix = 'speech';

export const routes = [
    ...addPrefix(QuirksRoutes, prefix),
    ...addPrefix(QuotesRoutes, prefix),
    ...addPrefix(SpeechRoutes, prefix),
    ...addPrefix(StoryRoutes, prefix)
];
