import 'text-encoding-polyfill';
import Joi from '@hapi/joi';

const validateRegisterSchema = Joi.object({
  name: Joi.string().required().min(2).max(64).messages({
    'string.base': `username should be a type of 'text'`,
    'string.empty': `username cannot be an empty field`,
    'string.min': `username should have a minimum length of {#limit}`,
    'string.max': `username should have a maximum length of {#limit}`,
    'any.required': `username is a required field`,
  }),
  email: Joi.string()
    .required()
    .email({tlds:{allow:false}})
    .required()
    .message('Email should be valid ex: example@email.com'),
  password: Joi.string()
    .required()
    .regex(new RegExp('^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))'))
    .message('password should contain at least 1 uppercase, 1 lowercase,and 1 numeric chararcter and length > 8 chars'),
  confirmpassword: Joi.string()
    .required()
    .messages({any: 'comfirm password by writing it again please'}),
  company_name: Joi.string()
    .required()
    .messages({any: 'please enter the company name'}),
  auth_contact_name: Joi.string()
    .required()
    .messages({any: 'your auth contact name is required'}),
  company_mobile: Joi.string()
    .required()
    .messages({any: 'the company modile number is required'}),
  company_telephone: Joi.string()
    .required()
    .messages({any: 'the company telephone number is required'}),
  company_account_number: Joi.string()
    .required()
    .messages({any: 'the company bank account number is required'}),
  company_fax: Joi.string().required()
});
export const validateRegister = data => {
  if(data.password!==data.confirmpassword)return {error:'Password is not confirmed'}; 
  const result = validateRegisterSchema.validate(data);
  if (result.error) return {error: result.error.message};
  else return {error:null};
};
