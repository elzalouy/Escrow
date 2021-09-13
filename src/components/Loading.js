import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {getUserBytoken, isLoggedIn as isToken} from '../httpService/auth';
import {AppActions} from '../store/AppState';
const Loading = ({navigation}) => {
  const dispatch = useDispatch();
  // Check if user is logged in before?
  const checkToken = async () => {
    const token = await isToken();
    //check if token -> true
    if(token){
      dispatch(
        AppActions.onChangeAppState([{element: 'isLoggedIn', value: true},{element:'isLoading',value:false}])
        );
          const user=await getUserBytoken();
          if(user) dispatch(AppActions.onSetLoggedUser(user));
          navigation.navigate('App');
        }
        else navigation.navigate('Auth');
  };

  return (
    <React.Fragment>
      {checkToken() &&
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
      </View>
      }
    </React.Fragment>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  },
};
export default Loading;
