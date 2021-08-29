//App State Managment
const initialState={
    connection:{
        isConnected: true,
        keyboard: false,
        isLoggedIn: false,
        isLoading: true,
    },
    loggedUser:{
        role:'',
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
        }
}
export default initialState;