import Joi from "joi";

export const TodoSchema = Joi.object({
  title: Joi.string().required(),
});
