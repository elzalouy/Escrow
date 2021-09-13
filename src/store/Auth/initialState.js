const initialState = {
  login: {
    email: '',
    password: '',
    error: '',
  },
  register: {
    data: {
      auth_contact_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      proof_of_auth:'',
      mobile_number: '',
      telephone_number: '',
      company_name: '',
      company_fax_number: '',
      company_account_number: '',
    },
    error: '',
    passIcon: 'md-eye',
    passHide: true,
    passHide2: true,
    file:'',
    page: 1,
  },
  forgetPassword: {
    email: '',
  },
  forgetPasswordCode: {
    code: '',
  },
};
export default initialState;
