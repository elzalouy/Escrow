import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '../../store/Auth';
import normalize from '../../utils/normalize';
import {ForgetPasswordCode as httpResetPassword} from '../../httpService/auth';
const w = Dimensions.get('screen').width;

export default ForgetPasswordCode = ({navigation}) => {
  const dispatch = useDispatch();
  const {code, newPassword, confirmPassword,error} = useSelector(
    state => state.Auth.forgetPasswordCode,
  );
  const onHandleChange = (element, value) => {
    dispatch(AuthActions.onChangeForgetPasswordCode([{element, value}]));
  };
  const onSubmit = async () => {
    const result = await httpResetPassword({
      code,
      newPassword,
      confirmPassword,
    });

    if (result.error)
      return dispatch(
        AuthActions.onChangeForgetPasswordCode([
          {element: 'error', value: result.error.message},
        ]),
      );
    else navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="Plese Enter Code"
          placeholderTextColor="#97ABBF"
          selectionColor="#7a85ff"
          textAlignVertical="bottom"
          style={styles.textInputStyle}
          value={code}
          onChangeText={text => onHandleChange('code', text)}
        />
        <TextInput
          placeholder="Your new Password"
          placeholderTextColor="#97ABBF"
          selectionColor="#7a85ff"
          textAlignVertical="bottom"
          style={styles.textInputStyle}
          value={newPassword}
          onChangeText={text => onHandleChange('newPassword', text)}
        />
        <TextInput
          placeholder="Confirm your password"
          placeholderTextColor="#97ABBF"
          selectionColor="#7a85ff"
          textAlignVertical="bottom"
          style={styles.textInputStyle}
          value={confirmPassword}
          onChangeText={text => onHandleChange('confirmPassword', text)}
        />
        <View style={{flexDirection: 'row', marginTop: w * 0.02}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.blueTextStyle}> Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.errorText}>{error}</Text>
      <View style={styles.buttonContainer}>
        <LinearGradient
          colors={['#6EB4FF', '#7889FF']}
          style={{
            borderRadius: 15,
            elevation: 2,
            height: w * 0.13,
            width: w * 0.7,
          }}
          start={{x: 0.7, y: 0}}>
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
              Submit
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              paddingTop: 30,
              textAlign: 'center',
              color: '#7a85ff',
              fontSize: 15,
              fontWeight: '600',
            }}>
            {' '}
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#f1f8ff',
  },
  loginContainer: {
    // flex:1,
    alignContent: 'center',
    // justifyContent:'center',
    alignSelf: 'center',
    marginTop: w * 0.3,
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
  blueTextStyle: {
    color: '#7889FF',
    fontSize: normalize(12),
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonContainer: {
    // flex:1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: w * 0.1,
  },
  buttonStyle: {
    height: w * 0.13,
    width: w * 0.7,
    justifyContent: 'center',
    alignContent: 'center',
  },
  errorText:{
    textAlign:'center',
    color:'red'
  }
});
