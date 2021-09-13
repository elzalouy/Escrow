import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from '../../utils/normalize';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {AppActions} from '../../store/AppState';
import {AuthActions} from '../../store/Auth';
import {isLoggedIn, login} from '../../httpService/auth';
Icon.loadFont();
Icon1.loadFont();
Icon2.loadFont();

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Login = ({navigation: {navigate}}) => {
  //store
  const dispatch = useDispatch();
  const {email, password, error} = useSelector(state => state.Auth.login);
  
  // handle login
  const onSubmit = async () => {
    try {
      // login http request
      let result = await login(email, password);
      // if error
      if (result.error.key)
        return dispatch(
          AuthActions.onChangeLogin([
            {element: 'error', value: result.error.message},
          ]),
        );
      // if not error (Get user data, make login input empty, set isLoggedIn and isloading)
      dispatch(AppActions.onSetLoggedUser(result.data));
      dispatch(
        AuthActions.onChangeLogin([
          {element: 'email', value: ''},
          {element: 'password', value: ''},
        ]),
      );
      dispatch(
        AppActions.onChangeAppState([
          {element: 'isLoggedIn', value: true},
          {element: 'isLoading', value: false},
        ]),
      );
    } catch (err) {}
  };

  const onChangeText = (element, value) => {
    dispatch(
      AuthActions.onChangeLogin([
        {element, value},
        {element: 'error', value: ''},
      ]),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#9DA2C9"
          selectionColor="#7a85ff"
          textAlignVertical="bottom"
          style={[
            styles.textInputStyle,
            {
              marginTop: w * 0.2,
            },
          ]}
          onChangeText={text => onChangeText('email', text)}
          value={email}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#9DA2C9"
          selectionColor="#7a85ff"
          textAlignVertical="bottom"
          secureTextEntry={true}
          style={[
            styles.textInputStyle,
            {
              marginTop: w * 0.02,
            },
          ]}
          onChangeText={text => onChangeText('password', text)}
          value={password}
        />
        <TouchableOpacity
          onPress={() => {
            navigate('ForgetPassword');
          }}>
          <Text style={styles.textStyle}> Forget Password ? </Text>
        </TouchableOpacity>
        <Text style={styles.errorStyle}> {error} </Text>
      </View>
      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={['#6EB4FF', '#7889FF']}
          style={{
            borderRadius: 15,
            elevation: 2,
            height: w * 0.13,
            width: w * 0.7,
          }}
          start={{
            x: 0.7,
            y: 0,
          }}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => onSubmit()}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity onPress={() => navigate('Register')}>
          <Text
            style={{
              paddingTop: 30,
              textAlign: 'center',
              color: '#7a85ff',
              fontSize: normalize(13),
              fontWeight: 'bold',
            }}>
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F8FF',
  },
  headerContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    color: '#193870',
    flexDirection: 'row',
  },
  hamburgerMenu: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  loginContainer: {
    alignContent: 'center',
    alignSelf: 'center',
  },
  textInputStyle: {
    alignSelf: 'center',
    height: 60,
    width: w - 100,
    backgroundColor: '#f1f8ff',
    borderBottomWidth: 1,
    borderBottomColor: '#7889FF',
    color: 'black',
  },
  textStyle: {
    color: '#9DA2C9',
    fontSize: normalize(11),
    textDecorationLine: 'underline',
    marginTop: w * 0.03,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: w * 0.06,
  },
  buttonStyle: {
    height: w * 0.13,
    width: w * 0.7,
    justifyContent: 'center',
    alignContent: 'center',
  },
  errorStyle: {
    color: 'red',
    fontSize: normalize(11),
    marginTop: w * 0.05,
    alignSelf: 'center',
  },
});

export default Login;
