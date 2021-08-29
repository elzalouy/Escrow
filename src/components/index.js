import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, Dimensions, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './Loading';
import Auth from './Auth';
import RoleStack from './RoleStack';
import { useSelector } from 'react-redux';
const RootStack = createStackNavigator();
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

export default Main = () => {
  const { isLoggedIn, isLoading } = useSelector((state) => state.App.connection);
  return (
    <React.Fragment>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Loading"
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            animationEnabled: false,
          }}>
          {isLoading && (
            <RootStack.Screen name="Loading" component={LoadingScreen} />
          )}
          <React.Fragment>
            {isLoggedIn ? (
              <RootStack.Screen name="App" component={RoleStack} />
            ) : (
              <RootStack.Screen name="Auth" component={Auth} />
            )}
          </React.Fragment>
        </RootStack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor="grey" />
    </React.Fragment>
  );
};