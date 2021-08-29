export const onChangeAppState = (state, action) => {
  action.payload.forEach(item => {
    state.connection[item.element] = item.value;
  });
};
export const onSetLoggedUser = (state, action) => {
  const data=action.payload;
  state.loggedUser = {
    role:data.role,
    name:data.name,
    email:data.email,
    mobile:data.mobile,
    phone_number: data.phone_number,
    auth_contact_name: data.auth_contact_name,
    company_name:data.company_name,
    company_phone_number: data.company_phone_number,
    company_fax_number: data.company_phone_number,
    company_city: data.company_city,
    company_country: data.company_country,
  };
};
export const onRemoveLoggedUser=(state,action)=>{
  state.loggedUser={
    role:'',
    name:'',
    email:'',
    mobile:'',
    phone_number: '',
    auth_contact_name: '',
    company_name:'',
    company_phone_number: '',
    company_fax_number: '',
    company_city:'',
    company_country: '',
  }
}
const reducers = {onChangeAppState,onSetLoggedUser};
export default reducers;
