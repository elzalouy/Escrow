import {setItem, getItem, removeItem} from '../utils/StorageHandler';

// static data
const data = [
  {
    _id: 0,
    role:'User',
    name: 'ezat elzalouy',
    email: 'ezatelzalouy711@gmail.com',
    password: '0.123456',
    mobile: '+2001064198879',
    phone_number: '0502792641',
    auth_contact_name: 'Ezat Elzalouy',
    company_name: 'Oprojects',
    company_phone_number: '022033668023',
    company_fax_number: '022033668678',
    company_city: 'Cairo',
    company_country: 'Egypt',
    company_trade_license: '',
    company_bank_name: 'Bank misr',
    company_iban: '985938984388943',
    company_account_number: '4435345',
    company_swift_code: '35h54',
    company_bank_city: 'Cairo',
    company_bank_country: 'Egypt',
  },
  {
    _id: 1,
    role:'User',
    name: 'Merna Emad',
    email: 'mernawaseif94@gmail.com',
    password: '12345678',
    mobile: '01005166323',
    phone_umber: '02203564023',
    auth_contact_name: 'Mirna Emad',
    company_name: 'Oprojects',
    company_phone_number: '022033668023',
    company_fax_number: '022033668678',
    company_city: 'Cairo',
    company_country: 'Egypt',
    company_trade_license: '',
    company_bank_name: 'Bank misr',
    company_iban: '985938984388943',
    company_account_number: '4435345',
    company_swift_code: '35h54',
    company_bank_city: 'Cairo',
    company_bank_country: '',
  },
];

// check if logged ?
export async function isLoggedIn() {
  const token = await getItem('x-auth-token');
  if (token) return true;
  return false;
}

export function login (email, password) {
  //Call Api code intest of this code
  const user = data.find(
    (item) => item.email === email && item.password === password,
  );
  if (user) {
    const token = user._id.toString();
    setItem({key: 'x-auth-token', value: token});
    return {data: user};
  } else return {error: 'Invalid Email or password'};
}

export async function logout() {
  //remove token from the storage
  await removeItem('x-auth-token');
  return {data: 'ok', error: null};
}

export async function Register(user) {
  user._id=data.length;
  data.push(user);
  await setItem({key:'x-auth-token',value:data.length.toString()});
  return user;
}
export async function getUserBytoken(){
  const token=await getItem('x-auth-token');
  const user=data.find(item=>item._id.toString()===token);
  if(user) return user;
  else return false;
}