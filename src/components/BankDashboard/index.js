import React from 'react';
import Profile from './Profile';
import Profile2 from './Profile2';
import DepositWithdraw from './DepositWithdraw';
import WorkPackage from './WorkPackage';
import DepositFund from './DepositFund';
import DepositSummary from './DepositSummary';
import Success from './Success';
import {View,Dimensions} from 'react-native';
import Settings from '../settings'
const w = Dimensions.get('window').width;

export default Bank = () => {
  return (
    <AppBStack.Navigator
      initialRouteName="DepositWithdraw"
      screenOptions={({route, navigation}) => ({
        
        headerRight: () => <Settings navigation2={navigation} />,
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
      })}>
      <AppBStack.Screen
        name="DepositWithdraw"
        component={DepositWithdraw}
        options={{
          title: 'Home',
          headerLeft: () => (
            <View
              style={{
                width: w * 0.2,
                height: w * 0.08,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          ),
        }}
      />
      <AppBStack.Screen
        name="WorkPackage"
        component={WorkPackage}
        options={{
          title: 'Work Package Name',
          // headerTintColor:'red'
        }}
      />
      <AppBStack.Screen
        name="DepositFund"
        component={DepositFund}
        options={{
          title: 'Deposit Fund',
          // headerTintColor:'red'
        }}
      />
      <AppBStack.Screen
        name="DepositSummary"
        component={DepositSummary}
        options={{
          title: 'Summary',
        }}
      />
      <AppBStack.Screen
        name="Success"
        component={Success}
        options={{
          title: 'Reciept',
        }}
      />
      <AppBStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Owner Details',
        }}
      />
      <AppBStack.Screen
        name="Profile2"
        component={Profile2}
        options={{
          title: 'Beneficial Details',
        }}
      />
    </AppBStack.Navigator>
  );
};
