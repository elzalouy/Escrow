import React from 'react';
import Login from './Login';
import Register from './Register';
import Fees from './Fees';
import ForgetPassword from './ForgetPassword';
import ForgetPasswordCode from './ForgetPasswordCode';
import normalize from '../../utils/normalize';

import { Image, TouchableOpacity, View, Dimensions } from 'react-native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

const AuthStack = createStackNavigator();
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default Auth = () => {
  return (
    <React.Fragment>
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerRight: () => (
            <TouchableOpacity
              style={{
                width: w * 0.2,
                height: w * 0.08,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                console.log('hi');
              }}>
              <Image
                source={{ uri: 'more' }}
                style={{ width: w * 0.06, height: w * 0.06 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerTintColor: '#002364',
          headerStyle: {
            backgroundColor: '#F2F8FF',
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleStyle: {
            fontFamily: 'Roboto',
            fontSize: normalize(18),
            fontWeight: 'normal',
            color: '#002364',
            textAlign: 'center',
          },
          headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
          headerBackTitle: ' ',
        }}>
        <AuthStack.Screen
          name="Login"
          component={Login}
          gestureEnabled={false}
          options={{
            title: 'Sign In',
            headerLeft: () => (
              <View
                style={{
                  width: w * 0.2,
                  height: w * 0.08,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              ></View>
            ),
          }}
        />
        <AuthStack.Screen
          name="Register"
          component={Register}
          gestureEnabled={false}
          options={{ title: 'Sign Up' ,
          headerLeft: () => (
            <View
              style={{
                width: w * 0.2,
                height: w * 0.08,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></View>
          )}}
        />
        <AuthStack.Screen
          name="Fees"
          component={Fees}
          options={{ title: 'Fees' ,
          headerLeft: () => (
            <View
              style={{
                width: w * 0.2,
                height: w * 0.08,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></View>)
        }}
        />
        <AuthStack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ title: 'Forget Password',
          headerLeft: () => (
            <View
              style={{
                width: w * 0.2,
                height: w * 0.08,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></View>)
        }}
        />
        <AuthStack.Screen
          name="ForgetPasswordCode"
          component={ForgetPasswordCode}
          options={{ title: 'Forget Password Code',
          headerLeft: () => (
            <View
              style={{
                width: w * 0.2,
                height: w * 0.08,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            ></View>) }}
        />
      </AuthStack.Navigator>
    </React.Fragment>
  );
};
