import 'text-encoding-polyfill';
import Joi from '@hapi/joi';

const validateRegisterSchema = Joi.object({
  auth_contact_name: Joi.string()
    .required()
    .min(3)
    .messages({'any': 'your auth contact name is required'}),
  email: Joi.string()
    .required()
    .email({tlds: {allow: false}})
    .messages({'any': 'Email should be valid ex: example@email.com'}),
  password: Joi.string()
    .required()
    .regex(new RegExp('^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))'))
    .message( 'password should contain at least 1 uppercase, 1 lowercase,and 1 numeric chararcter and length > 8 chars'),
  password_confirmation: Joi.string()
    .required()
    .messages({'any':'comfirm password by writing it again please'}),
  mobile_number: Joi.string()
    .required()
    .messages({'any':'the company modile number is required'}),
  telephone_number: Joi.string()
    .required()
    .messages({'any':'the company telephone number is required'}),
  proof_of_auth: Joi.any()
    .required()
    .messages({'any':'Please upload the proof of auth as (.pdf) file'}),
  company_name: Joi.string().optional().allow(null,''),
  company_account_number: Joi.string().optional().allow(null,''),
  company_fax_number: Joi.string().optional().allow(null,''),
});
export const validateRegister = data => {
  if (data.password !== data.password_confirmation)
    return {error: 'Password is not confirmed'};
  const result = validateRegisterSchema.validate(data);
  if (result.error) return {error: result.error.message};
  else return {error: null};
};
