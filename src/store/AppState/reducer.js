export const onChangeAppState = (state, action) => {
  action.payload.forEach(item => {
    state.connection[item.element] = item.value;
  });
};
export const onSetLoggedUser = (state, action) => {
  const data = action.payload;
  state.loggedUser = {
    auth_contact_name: data.auth_contact_name?data.auth_contact_name:'',
    email: data.email?data.email:'',
    mobile_number: data.mobile_number?data.mobile_number:'',
    telephone_number: data.phone_number?data.phone_number:'',
    company_name: data.company_name?data.company_name:'',
    company_phone_number: data.company_phone_number?data.company_phone_number:'',
    company_fax_number: data.company_phone_number?data.company_phone_number:'',
    company_city: data.company_city?data.company_city:'',
    company_country: data.company_country?data.company_country:'',
    company_iban: data.company_iban?data.company_iban:'',
    company_swift_code: data.company_swift_code?data.company_swift_code:'',
    company_trade_license: data.company_trade_license?data.company_trade_license:'',
    work_packages: data.work_packages?data.work_packages:'',
    company_account_number: data.company_account_number?data.company_account_number:'',
    company_bank_city: data.company_bank_city?data.company_bank_city:'',
    company_bank_country: data.company_bank_country?data.company_bank_country:'',
    company_bank_name: data.company_bank_name?data.company_bank_name:'',
  };
};
export const onRemoveLoggedUser = (state, action) => {
  state.loggedUser = {
    role: '',
    name: '',
    email: '',
    mobile: '',
    phone_number: '',
    auth_contact_name: '',
    company_name: '',
    company_phone_number: '',
    company_fax_number: '',
    company_city: '',
    company_country: '',
  };
};
const reducers = {onChangeAppState, onSetLoggedUser, onRemoveLoggedUser};
export default reducers;
