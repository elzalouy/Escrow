import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {getToken} from '../httpService/auth';
import {AppActions} from '../store/AppState';

const Loading = ({navigation}) => {
  const dispatch = useDispatch();
  const {isLoggedIn, isLoading} = useSelector(state => state.App);
  // Check if user is logged in before?
  const checkToken = async () => {
    const token = await getToken();
    //check if token -> true
    if (token) {
      dispatch(
        AppActions.onChangeAppState([
          {element: 'isLoggedIn', value: true},
          {element: 'isLoading', value: false},
        ]),
      );
      navigation.navigate('App');
    } else navigation.navigate('Auth');
  };
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <React.Fragment>
      {checkToken() && (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => checkToken()}>
            <ActivityIndicator size="large" color="black" />
          </TouchableOpacity>
        </View>
      )}
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
