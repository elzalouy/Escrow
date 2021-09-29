export const onChangeAppState = (state, action) => {
  action.payload.forEach(item => {
    state.connection[item.element] = item.value;
  });
};
export const onSetLoggedUser = (state, action) => {
  state.loggedUser = action.payload;
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
