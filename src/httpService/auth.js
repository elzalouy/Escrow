import {setItem, getItem, removeItem} from '../utils/StorageHandler';
import http from './httpService';
import _try from '../middleware/try';
const API_URL = 'http://68.183.30.130/escrowbchainbackend/public/api/';
// static data

export async function isLoggedIn() {
  const token = await getItem('x-auth-token');
  if (token) return true;
  return false;
}

/**
 * Login (API endpoint)
 *
 * Call API endpoint called 'login', it's a permission for users to access their dashboard
 * @param {email} email the Email you entered while registering
 * @param {password} password the Password you entered while registering
 * @returns {data} data for user
 * @returns {error} error if endpoint returns error
 */
export const login = async (email, password) => {
  var result = {};
  await http
    .post(API_URL + 'login', {
      email: email,
      password: password,
    })
    .then(async res => {
      await setItem({key: 'x-auth-token', value: response.data.success.token});
      result = {data: res.data.user, error: null};
    })
    .catch(err => {
      const error = err.response.data;
      console.log(error);
      result = {
        data: null,
        error: {key: 'error', message: err.response.data.error},
      };
    });
  return result;
};

export async function logout() {
  //remove token from the storage
  await removeItem('x-auth-token');
  return {data: 'ok', error: null};
}

export const Register = async user => {
  var result = {};
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
  await http
    .post(API_URL + 'register', newUser)
    .then(async res => {
      await setItem({key: 'x-auth-token', value: res.data.success.token});
      result = {data: response.data.user, error: null};
    })
    .catch(err => {
      const error = err.response.data[Object.keys(err.response.data)[0]];
      result = {
        data: null,
        error: {key: 'error', message: error[0]},
      };
    });
  return result;
};

export async function getUserBytoken() {
  const token = await getItem('x-auth-token');
  const user = data.find(item => item._id.toString() === token);
  if (user) return user;
  else return false;
}

/** Forget Password (API endpoint):
 *
 * it's responsible for sending an email with a code that permit the user to reset his/her password
 * @param {email} email Email should be a valid email.
 */
export async function forgetPassword(email) {
  const result = {};
  await http
    .post(API_URL + 'forgotpassword', {email: email})
    .then(res => {
      result = {data: res.data, error: null};
    })
    .catch(
      err =>
        (result = {error: {key: 'forget password', value: err}, data: null}),
    );
  return result;
}

export async function ForgetPasswordCode(code) {
  const result = {};
  await http
    .post(API_URL + 'code', {code: code})
    .then(res => (result = {data: res.data, error: null}))
    .catch(
      err => (result = {data: null, error: {key: 'code error', value: err}}),
    );
  return result;
}
