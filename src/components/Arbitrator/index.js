import AProfile from './AProfile';
import ADisputes from './ADisputes';
import AWorkPackage from './AWorkPackage';
import AControl from './AControl';
import AContact from './AContact';
import AMakeDesition from './AMakeDesition';
import APackageDetails from './APackageDetails';
import ABuyerDetails from './ABuyerDetails';
import ASupplierDetails from './ASupplierDetails';
import AControlDispute from './AControlDispute';
import ADocuments from './ADocuments';
import AMilestones from './AMilestones';
import AStatement from './AStatement';
import Settings from '../settings';
import {Dimensions, View} from 'react-native';
import {HeaderStyleInterpolators} from '@react-navigation/stack';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default Arbitrator = () => {
  return (
    <AppAStack.Navigator
      initialRouteName="AProfile"
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
      <AppAStack.Screen
        name="AProfile"
        component={AProfile}
        options={{
          title: 'Arbitrator',
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
      <AppAStack.Screen
        name="ADisputes"
        component={ADisputes}
        options={{
          title: 'Disputes',
        }}
      />
      <AppAStack.Screen
        name="AWorkPackage"
        component={AWorkPackage}
        options={{
          title: 'Work Package',
        }}
      />
      <AppAStack.Screen
        name="AControl"
        component={AControl}
        options={{
          title: 'Dispute Page',
        }}
      />
      <AppAStack.Screen
        name="AContact"
        component={AContact}
        options={{
          title: 'Contact Parties',
        }}
      />
      <AppAStack.Screen
        name="AMakeDesition"
        component={AMakeDesition}
        options={{
          title: 'Make Your Decision',
        }}
      />
      <AppAStack.Screen
        name="APackageDetails"
        component={APackageDetails}
        options={{
          title: 'Work Package Details',
        }}
      />
      <AppAStack.Screen
        name="ABuyerDetails"
        component={ABuyerDetails}
        options={{
          title: 'Buyer Details',
        }}
      />
      <AppAStack.Screen
        name="ASupplierDetails"
        component={ASupplierDetails}
        options={{
          title: 'Supplier Details',
        }}
      />
      <AppAStack.Screen
        name="AControlDispute"
        component={AControlDispute}
        options={{
          title: 'Control Dispute',
        }}
      />
      <AppAStack.Screen
        name="ADocuments"
        component={ADocuments}
        options={{
          title: 'Work Documents',
        }}
      />
      <AppAStack.Screen
        name="AMilestones"
        component={AMilestones}
        options={{
          title: 'Milestones',
        }}
      />
      <AppAStack.Screen
        name="AStatement"
        component={AStatement}
        options={{
          title: 'Statements',
        }}
      />
    </AppAStack.Navigator>
  );
};
