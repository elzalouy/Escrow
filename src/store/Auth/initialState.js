const initialState = {
  login: {
    email: '',
    password: '',
    error: '',
  },
  register: {
    data: {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      auth_contact_name: '',
      company_name: '',
      company_mobile: '',
      company_telephone: '',
      company_fax: '',
      company_account_number: '',
    },
    error: '',
    verified: null,
    checked: true,
    passIcon: 'md-eye',
    passHide: true,
    passHide2: true,
    showImage: false,
    img: '',
    memberId: '',
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
