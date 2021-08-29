export const onChangeLogin = (state, action) => {
  action.payload.forEach(item => {
    state.login[item.element] = item.value;
  });
};
export const onChangeForgetPassword = (state, action) => {
  action.payload.forEach(item => {
    state.forgetPassword[item.element] = item.value;
  });
};
export const onChangeRegister = (state, action) => {
  action.payload.forEach(item => {
    state.register.data[item.element] = item.value;
  });
};
export const onChangeRegisterOptions = (state, action) => {
  action.payload.forEach(item => {
    state.register[item.element] = item.value;
  });
};
export const onChangeForgetPasswordCode = (state, action) => {
  action.payload.forEach(item => {
    state.forgetPasswordCode[item.element] = item.value;
  });
};
const exports = {
  onChangeLogin,
  onChangeForgetPassword,
  onChangeRegister,
  onChangeForgetPasswordCode,
  onChangeRegisterOptions,
};
export default exports;
