import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from './UserDashboard';
import Bank from './BankDashboard';
import Arbitrator from './Arbitrator';

const UserRoleStack = createStackNavigator();

export default RoleStack = () => {
    return (
      <UserRoleStack.Navigator initialRouteName="User" headerMode="none">
        <UserRoleStack.Screen name="User" component={User} />
        {/* <UserRoleStack.Screen name="Bank" component={Bank} /> */}
        <UserRoleStack.Screen name="Arbitrator" component={Arbitrator} />
      </UserRoleStack.Navigator>
    );
  };
  
