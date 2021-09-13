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
import {useDispatch, useSelector} from 'react-redux';
import {forgetPassword} from '../../httpService/auth';
import {AuthActions} from '../../store/Auth';
import normalize from '../../utils/normalize';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ForgetPassword = ({navigation}) => {
  const dispatch = useDispatch();
  const {email} = useSelector(state => state.Auth.forgetPassword);
  const handleChange = (element, value) => {
    dispatch(AuthActions.onChangeForgetPassword([{element, value}]));
  };
  const onHandleSubmit = async () => {
    const result = await forgetPassword(email);
    if (result.error.key) alert(result.error);
    else navigation.navigate('ForgetPasswordCode');
  };
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#97ABBF"
            selectionColor="#7a85ff"
            textAlignVertical="bottom"
            style={styles.textInputStyle}
            value={email}
            onChangeText={text => handleChange('email', text)}
          />
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
            start={{x: 0.7, y: 0}}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => onHandleSubmit()}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                Send
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </React.Fragment>
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
  },
  textInputStyle: {
    alignSelf: 'center',
    height: 60,
    width: w - 100,
    backgroundColor: '#f1f8ff',
    borderBottomWidth: 1,
    borderBottomColor: '#7889FF',
    color: 'black',
    marginTop: w * 0.3,
  },
  textStyle: {
    color: '#9DA2C9',
    fontSize: normalize(11),
    textDecorationLine: 'underline',
    marginTop: w * 0.03,
    // paddingTop:10,
    // paddingBottom:10
  },
  buttonContainer: {
    // flex:1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: w * 0.2,
  },
  buttonStyle: {
    height: w * 0.13,
    width: w * 0.7,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default ForgetPassword;
