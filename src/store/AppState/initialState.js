//App State Managment

const initialState = {
  connection: {
    isConnected: true,
    keyboard: false,
    isLoggedIn: false,
    isLoading: true,
  },
  loggedUser: {
    auth_contact_name: '',
    email: '',
    mobile_number: '',
    telephone_number: '',
    company_name: '',
    company_phone_number: '',
    company_fax_number: '',
    company_city: '',
    company_country: '',
    company_iban: '',
    company_swift_code: '',
    company_trade_license: '',
    company_account_number: '',
    work_packages: [],
    company_bank_city: '',
    company_bank_country: '',
    company_bank_name: '',
    balance: '',
    work_packages: [
      {role: '', title: '', image: '', content: '', amount: '', deadline: ''},
    ],
  },
};
export default initialState;
