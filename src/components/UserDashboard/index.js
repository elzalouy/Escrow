import React from 'react';
import LockCode from './LockCode';
import Home from './Home';
import Wallet from './Wallet';
import LastTransactions from './LastTransactions';
import Reciept from './Reciept';
import WorkInvitations from './WorkInvitations';
import CreateWorkPackage from './CreateWorkPackage';
import UserWorkPackage from './UserWorkPackage';
import InviteSupplier from './InviteSupplier';
import UserDepositFund from './UserDepositFund';
import NewWorkPackage from './NewWorkPackage';
import SupplierDetails from './SupplierDetails';
import WorkPackageDetails from './WorkPackageDetails';
import Milestones from './Milestones';
import ControlMilestones from './ControlMilestones';
import RequestChange from './RequestChange';
import DisputeDocuments from './DisputeDocuments';
import DisputeFees from './DisputeFees';
import DisputeReciept from './DisputeReciept';
import DisputeTimeline from './DisputeTimeline';
import AddMilestone from './AddMilestone';
import Settings from '../settings';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {View,Dimensions} from 'react-native';
import normalize from '../../utils/normalize';

const w = Dimensions.get('window').width;

const AppStack=createStackNavigator();

export default User = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
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
      <AppStack.Screen
        name="LockCode"
        component={LockCode}
        options={{
          title: 'Enter Lock Code',
        }}
      />
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => (
            <View
              style={{
                width: w* 0.2,
                height: w * 0.08,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          ),
        }}
      />
      <AppStack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Wallet',
        }}
      />

      <AppStack.Screen
        name="LastTransactions"
        component={LastTransactions}
        options={{
          title: 'Latest Transactions',
        }}
      />

      <AppStack.Screen
        name="Reciept"
        component={Reciept}
        options={{
          title: 'Reciept',
        }}
      />

      <AppStack.Screen
        name="WorkInvitations"
        component={WorkInvitations}
        options={{
          title: 'Work Invitations',
        }}
      />
      <AppStack.Screen
        name="CreateWorkPackage"
        component={CreateWorkPackage}
        options={{
          title: 'Create Work Package',
        }}
      />
      <AppStack.Screen
        name="UserWorkPackage"
        component={UserWorkPackage}
        options={{
          title: 'Work Package',
        }}
      />
      <AppStack.Screen
        name="InviteSupplier"
        component={InviteSupplier}
        options={{
          title: 'Invite Supplier',
        }}
      />
      <AppStack.Screen
        name="UserDepositFund"
        component={UserDepositFund}
        options={{
          title: 'Deposit Fund',
        }}
      />
      <AppStack.Screen
        name="NewWorkPackage"
        component={NewWorkPackage}
        options={{
          title: 'Work Package',
        }}
      />
      <AppStack.Screen
        name="SupplierDetails"
        component={SupplierDetails}
        options={{
          title: 'Supplier Details',
        }}
      />
      <AppStack.Screen
        name="WorkPackageDetails"
        component={WorkPackageDetails}
        options={{
          title: 'Work Package Details',
        }}
      />
      <AppStack.Screen
        name="Milestones"
        component={Milestones}
        options={{
          title: 'Milestones',
        }}
      />
      <AppStack.Screen
        name="ControlMilestones"
        component={ControlMilestones}
        options={{
          title: 'Control Milestones',
        }}
      />
      <AppStack.Screen
        name="RequestChange"
        component={RequestChange}
        options={{
          title: 'Request Change',
        }}
      />
      <AppStack.Screen
        name="DisputeDocuments"
        component={DisputeDocuments}
        options={{
          title: 'Documents',
        }}
      />
      <AppStack.Screen
        name="DisputeFees"
        component={DisputeFees}
        options={{
          title: 'Fees',
        }}
      />
      <AppStack.Screen
        name="DisputeReciept"
        component={DisputeReciept}
        options={{
          title: 'Reciept',
        }}
      />
      <AppStack.Screen
        name="DisputeTimeline"
        component={DisputeTimeline}
        options={{
          title: 'Dispute',
        }}
      />
      <AppStack.Screen
        name="AddMilestone"
        component={AddMilestone}
        options={{
          title: 'Add Milestone',
        }}
      />
    </AppStack.Navigator>
  );
};
