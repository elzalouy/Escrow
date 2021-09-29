module.exports = function (result) {
  if (result.message === 'Network Error')
    return {key: 'Server error', message: 'Network Error'};
  if (!result) return {key: 'server error', message: 'Network not established'};
  if (result.response) {
    if (result.response.status === 500)
      return {
        key: 'server error',
        message: 'May be the network is not established.',
      };
    if(result.response.status===401)return {key:'Unauthenticated',message:'Unauthenticated'}
  }
  return null;
};
