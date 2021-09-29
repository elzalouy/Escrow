import {setItem, getItem, removeItem, setItems} from '../utils/StorageHandler';
import http from './httpService';
import _try from '../middleware/try';
import {API_URL} from '../../app.json';
import handleServerError from './handleServerError';

export const getToken = _try(async () => {
  const token = await getItem('x-auth-token');
  if (token) return true;
  return false;
});

/**
 * Login (API endpoint)
 *
 * Call API endpoint called 'login', it's a permission for users to access their dashboard
 * @param {email} email the Email you entered while registering
 * @param {password} password the Password you entered while registering
 * @returns {data} data for user
 * @returns {error} error if endpoint returns error
 */
export const login = _try(async (email, password) => {
  const response = await http.post(API_URL + 'login', {
    email: email,
    password: password,
  });
  const result = handleServerError(response);
  if (result) return {data: null, error: result};
  if (response.status === 200) {
    await setItems([
      ['x-auth-token', response.data.success.token],
      ['auth_contact_name', response.data.user.auth_contact_name],
      ['email', response.data.user.email],
    ]);
    return {data: response.data.user, error: null};
  } else {
    return {
      data: null,
      error: {key: 'error', message: response.response.data.error},
    };
  }
});

/**
 * Logout
 *
 * It's responsible for removing the access token from the localtoragge to remove it.
 */
export const logout = _try(async () => {
  //remove token from the storage
  await removeItem('x-auth-token');
  return {data: 'ok', error: null};
});

/**
 * Register
 *
 * Register method is for calling HTTP register API endpoint.
 * @param {User} user The form data that the new user entered
 * @returns new User Data if the registeration is succesful.
 */
export const Register = _try(async user => {
  const newUser = new FormData();
  newUser.append('auth_contact_name', user.auth_contact_name);
  newUser.append('email', user.email);
  newUser.append('password', user.password);
  newUser.append('password_confirmation', user.password_confirmation);
  newUser.append('phone_number', user.phone_number);
  newUser.append('mobile_number', user.mobile_number);
  newUser.append('proof_of_auth', user.proof_of_auth);
  newUser.append('company_name', user.company_name);
  newUser.append('company_fax_number', user.company_fax_number);
  newUser.append('company_account_number', user.company_account_numbernewUser);
  const response = await http.post(API_URL + 'register', newUser);
  const result = handleServerError(response);
  if (result) return {data: null, error: result};
  if (response.data)
    await setItem({key: 'x-auth-token', value: response.data.success.token});
  return {
    data: response.data ? response.data.user : null,
    error: response.response
      ? {
          key: 'error',
          message:
            response.response.data[Object.keys(response.response.data)[0]][0],
        }
      : null,
  };
});

export const getUserBytoken = _try(async () => {
  const token = await getItem('x-auth-token');
  if (token) return true;
  else return false;
});

/** Forget Password (API endpoint):
 *
 * it's responsible for sending an email with a code that permit the user to reset his/her password
 * @param {email} email Email should be a valid email.
 */
export const forgetPassword = _try(async email => {
  const response = await http.post(API_URL + 'password/forget', {email: email});
  if (response.status === 200) {
    return {data: response.data, error: null};
  } else {
    return {
      data: null,
      error: {
        key: 'error',
        message: response.response.data.error.email[0],
      },
    };
  }
});

export const ForgetPasswordCode = _try(
  async ({code, newPassword, confirmPassword}) => {
    if (newPassword !== confirmPassword)
      return {
        data: null,
        error: {
          key: 'error',
          message: "Password and confirm password didn't match",
        },
      };
    const response = await http.post(API_URL + 'password/reset', {
      code: code,
      password: newPassword,
      confirm_password: confirmPassword,
    });
    const result = handleServerError(response);
    if (result) return {data: null, error: result};
    return {
      data: response.data ? response.data.success : null,
      error: response.response
        ? {key: 'error', message: response.response.data.error}
        : null,
    };
  },
);
