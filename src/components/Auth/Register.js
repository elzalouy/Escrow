import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import normalize from '../../utils/normalize';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '../../store/Auth';
import {validateRegister} from '../../httpService/validate';
import {Register as httpRegister} from '../../httpService/auth';
import {AppActions} from '../../store/AppState';
import Picker from '../Ui/Picker';
import pick from '../../utils/picker';
Icon.loadFont();
Icon1.loadFont();
Icon2.loadFont();

const w = Dimensions.get('window').width;

export default Register = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.Auth.register);

  const onHandleChange = (element, value) => {
    dispatch(AuthActions.onChangeRegister([{element, value}]));
    dispatch(
      AuthActions.onChangeRegisterOptions([{element: 'error', value: ''}]),
    );
  };

  const onHandleChangeOptions = async (element, value) => {
    dispatch(AuthActions.onChangeRegisterOptions([{element, value}]));
  };

  const onSubmit = async () => {
    // check data validation if it's ok call api, if not display error.
    const result = validateRegister(state.data);
    if (result.error)
      dispatch(
        AuthActions.onChangeRegisterOptions([
          {
            element: 'error',
            value: result.error,
          },
        ]),
      );
    else {
      const result = await httpRegister(state.data);
      if (result.error)
        return dispatch(
          AuthActions.onChangeRegisterOptions([
            {element: 'error', value: result.error.message},
          ]),
        );
       dispatch(
          AppActions.onChangeAppState([
            {element: 'isLoggedIn', value: true},
            {element: 'isLoading', value: true},
          ]),
        );
      dispatch(AppActions.onSetLoggedUser(result.data));
      navigation.navigate('App');
    }
  };

  const onHandleUploadFile = async () => {
    const res = await pick('pdf', 'file');
    dispatch(
      AuthActions.onChangeRegisterOptions([
        {element: 'file', value: res[0].name},
      ]),
    );
    dispatch(
      AuthActions.onChangeRegister([{element: 'proof_of_auth', value: res[0]}]),
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#F2F8FF'}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: w * 0.05,
          }}>
          <TouchableOpacity
            style={
              state.page == 1 ? styles.PageSelected : styles.PageUnselected
            }
            activeOpacity={1.0}
            onPress={() => onHandleChangeOptions('page', 1)}>
            <View style={styles.IconContainer}>
              <Text style={styles.iconText}>1</Text>
            </View>
            <Text
              style={
                state.page == 1
                  ? styles.buttonTextSelected
                  : styles.buttonTextUnselected
              }>
              User Info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              state.page == 2 ? styles.PageSelected : styles.PageUnselected,
              {marginLeft: w * 0.05},
            ]}
            activeOpacity={1.0}
            onPress={() => onHandleChangeOptions('page', 2)}>
            <View style={styles.IconContainer}>
              <Text style={styles.iconText}>2</Text>
            </View>
            <Text
              style={
                state.page == 2
                  ? styles.buttonTextSelected
                  : styles.buttonTextUnselected
              }>
              Company Info
            </Text>
          </TouchableOpacity>
        </View>
        {state.page == 1 ? (
          <View style={styles.loginContainer}>
            <TextInput
              placeholder="Authorized Contact Name"
              placeholderTextColor="#97ABBF"
              selectionColor="#7a85ff"
              textAlignVertical="bottom"
              style={styles.textInputStyle}
              value={state.data.auth_contact_name}
              onChangeText={text => onHandleChange('auth_contact_name', text)}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#97ABBF"
              selectionColor="#7a85ff"
              textAlignVertical="bottom"
              style={styles.textInputStyle}
              value={state.data.email}
              onChangeText={text => onHandleChange('email', text)}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#97ABBF"
              selectionColor="#7a85ff"
              secureTextEntry={true}
              textAlignVertical="bottom"
              style={styles.textInputStyle}
              value={state.data.password}
              onChangeText={text => onHandleChange('password', text)}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#97ABBF"
              selectionColor="#7a85ff"
              secureTextEntry={true}
              textAlignVertical="bottom"
              style={styles.textInputStyle}
              value={state.data.password_confirmation}
              onChangeText={text =>
                onHandleChange('password_confirmation', text)
              }
            />
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="#97ABBF"
              selectionColor="#7a85ff"
              textAlignVertical="bottom"
              style={styles.textInputStyle}
              value={state.data.mobile_number}
              onChangeText={text => onHandleChange('mobile_number', text)}
            />
            <TextInput
              placeholder="Telephone Number"
              placeholderTextColor="#97ABBF"
              selectionColor="#7a85ff"
              textAlignVertical="bottom"
              style={styles.textInputStyle}
              value={state.data.telephone_number}
              onChangeText={text => onHandleChange('telephone_number', text)}
            />
            <Picker
              onHandleUploadFile={onHandleUploadFile}
              fileName={state.file}
            />
            <Text style={styles.errorStyle}>{state.error}</Text>
            <View style={styles.buttonContainer}>
              <LinearGradient
                colors={['#6EB4FF', '#7889FF']}
                style={{
                  borderRadius: 15,
                  elevation: 2,
                  height: w * 0.13,
                  width: w * 0.7,
                  marginTop: w * 0.08,
                }}
                start={{x: 0.7, y: 0}}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => onHandleChangeOptions('page', 2)}>
                  <Text
                    style={{
                      color: '#fff',
                      textAlign: 'center',
                      fontSize: 17,
                      fontWeight: 'bold',
                    }}>
                    Next
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        ) : (
          <View style={styles.loginContainer}>
            <TextInput
              placeholder="Company Name (optional)"
              placeholderTextColor="#97ABBF"
              selectionColor="#7a85ff"
              textAlignVertical="bottom"
              style={styles.textInputStyle}
              value={state.data.company_name}
              onChangeText={text => onHandleChange('company_name', text)}
            />
            <TextInput
              placeholder="Fax Number (optional)"
              placeholderTextColor="#97ABBF"
              selectionColor="#7a85ff"
              textAlignVertical="bottom"
              style={styles.textInputStyle}
              value={state.data.company_fax}
              onChangeText={text => onHandleChange('company_fax', text)}
            />
            <TextInput
              placeholder="Bank Account Number (optional)"
              placeholderTextColor="#97ABBF"
              selectionColor="#7a85ff"
              textAlignVertical="bottom"
              style={styles.textInputStyle}
              value={state.data.company_account_number}
              onChangeText={text =>
                onHandleChange('company_account_number', text)
              }
            />
            <Text style={styles.errorStyle}>{state.error}</Text>
            <TouchableOpacity
              style={{marginTop: w * 0.1, alignSelf: 'center'}}
              onPress={() => navigation.navigate('Fees')}>
              <Text style={styles.txt}>Fees and TC</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <LinearGradient
                colors={['#6EB4FF', '#7889FF']}
                style={{
                  borderRadius: 15,
                  elevation: 2,
                  height: w * 0.13,
                  width: w * 0.7,
                  marginTop: w * 0.08,
                  marginBottom: w * 0.08,
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
                    Sign up
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
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
    // flex:1,
    alignContent: 'center',
    // justifyContent:'center',
    alignSelf: 'center',
    marginTop: w * 0.1,
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
    // paddingTop:10,
    // paddingBottom:10
  },
  txt: {
    fontFamily: 'Roboto',
    fontSize: normalize(13),
    fontWeight: 'normal',
    color: '#002364',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    // flex:1,
    flexDirection: 'column',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    marginTop: w * 0.04,
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
  PageSelected: {
    backgroundColor: '#7889FF',
    width: w * 0.4,
    height: w * 0.1,
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  PageUnselected: {
    backgroundColor: '#E8EBFD',
    width: w * 0.4,
    height: w * 0.1,
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  IconContainer: {
    backgroundColor: 'white',
    width: w * 0.08,
    height: w * 0.08,
    borderRadius: w * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: w * 0.02,
  },
  buttonTextSelected: {
    fontFamily: 'Roboto-Bold',
    fontSize: normalize(13),
    fontWeight: 'bold',
    fontWeight: 'normal',
    color: 'white',
  },
  buttonTextUnselected: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: normalize(13),
    fontWeight: 'normal',
    color: '#002364',
  },
  iconText: {
    // fontFamily:'Roboto-Bold',
    fontSize: normalize(14),
    fontWeight: 'bold',
    fontWeight: 'normal',
    color: '#002364',
  },
  inputFileStyle: {
    color: '#97ABBF',
    textAlignVertical: 'bottom',
    paddingLeft: 5,
    height: 60,
    width: w - 100,
    backgroundColor: '#f1f8ff',
    borderBottomWidth: 1,
    borderBottomColor: '#7889FF',
    paddingTop: 25,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  inputFileTextStyle: {
    color: '#97ABBF',
  },
  inputFileIconStyle: {
    color: '#7889FF',
    fontSize: 22,
    end: -120,
  },
});
