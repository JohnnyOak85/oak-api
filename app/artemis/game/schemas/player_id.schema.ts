import Joi from 'joi';

export const PlayerIdSchema = Joi.object().keys({
    playerId: Joi.string().required().description('Id string of the player you want to find')
});
