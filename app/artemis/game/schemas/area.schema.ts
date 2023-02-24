import Joi from 'joi';

export default Joi.object().keys({
    area: Joi.string()
});
