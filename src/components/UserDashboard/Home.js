import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import normalize from '../../utils/normalize';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const content = [
  {
    title: 'Aquatics',
    image: 'aquatics',
    content: 'Mobile App',
    amount: '$1000.00',
    deadline: 'March 10',
  },
  {
    title: 'Mazera',
    image: 'aquatics',
    content: 'Mobile App',
    amount: '$1000.00',
    deadline: 'January 30',
  },
  {
    title: 'Froneri',
    image: 'froneri',
    content: 'Web Development',
    amount: '$1000.00',
    deadline: 'May 20',
  },
];

const content2 = [
  {
    title: 'Aquatics UI/UX Design',
    image: 'aquatics',
    content: 'Michael Scoffield',
  },
  {
    title: 'Mazera App Development',
    image: 'user',
    content: 'Joey Tribiani',
  },
  {
    title: 'Froneri Backend',
    image: 'froneri',
    content: 'Monica Geller',
  },
];

const Home = ({navigation}) => {
  const loggedUser=useSelector(state=>state.App.loggedUser);
  const supplierPackages=loggedUser.work_packages.filter(item=>item.role==='supplier');
  const buyerPackages=loggedUser.work_packages.filter(item=>item.role==='buyer');
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{alignItems: 'center'}}>
      <View style={styles.iconContainer2}>
        <Icon name="note" size={normalize(13)} color="#7889FF" />
      </View>
      <Image
        source={{uri: 'oprojects'}}
        style={styles.img}
        resizeMode="cover"
      />
      <Text style={styles.name}> {loggedUser.auth_contact_name} </Text>
      <View style={styles.counterContainer}>
        <Text style={styles.txt3}>3</Text>
      </View>
      <TouchableOpacity
        style={styles.btn2}
        onPress={() => navigation.navigate('WorkInvitations')}>
        <Text style={styles.txt2}>Work Invitations</Text>
      </TouchableOpacity>
      <View style={styles.view1}>
        <View
          style={{
            margin: w * 0.05,
            marginBottom: w * 0.02,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.txt4}>Available Wallet Ballance</Text>
            <Text style={styles.txt5}>{`$${loggedUser.balance}`}</Text>
            <Text style={styles.txt1}>All Work Packages</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Wallet')}>
            <Image
              source={{uri: 'wallet2'}}
              style={[styles.img5, {marginLeft: w * 0.2}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.packagesContainer}>
        <Text
          style={[styles.txt4, {marginTop: w * 0.03, marginLeft: w * 0.04}]}>
          Work Packages
        </Text>
        <Text
          style={[
            styles.txt6,
            {
              fontSize: normalize(11),
              marginTop: w * 0.06,
              marginLeft: w * 0.045,
            },
          ]}>
          As a Supplier
        </Text>
        {supplierPackages.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.title}
              style={
                index == content.length - 1
                  ? [styles.card, {marginBottom: w * 0.07}]
                  : index == 0
                  ? [styles.card, {marginTop: w * 0.05}]
                  : styles.card
              }
              onPress={() =>
                navigation.navigate('WorkPackageDetails')
              }>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: w * 0.12,
                    height: w * 0.12,
                    borderRadius: w * 0.06,
                  }}
                  resizeMode="contain"
                  source={{uri: item.image}}
                />
              </View>
              <View style={{flex: 4, justifyContent: 'center'}}>
                <Text style={styles.txt6}>{item.title}</Text>
                <Text style={styles.txt7}>{item.content}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={[
                      styles.txt7,
                      {
                        fontSize: normalize(9),
                        marginBottom: w * 0.01,
                      },
                    ]}>
                    Deadline{' '}
                  </Text>
                  <Text
                    style={[
                      styles.txt7,
                      {
                        fontSize: normalize(9),
                        marginBottom: w * 0.04,
                        color: '#6EB4FF',
                      },
                    ]}>
                    {item.deadline}
                  </Text>
                  <Text style={styles.txt8}>{item.amount}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', justifyContent: 'center'}}>
                  <LinearGradient
                    colors={['#6EB4FF', '#7889FF']}
                    style={styles.linearGradient}>
                    <Icon2
                      // style={{marginRight:w*0.03}}
                      name="keyboard-arrow-right"
                      size={normalize(25)}
                      color="white"
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={[styles.packagesContainer, {marginBottom: w * 0.2}]}>
        <Text
          style={[
            styles.txt6,
            {
              fontSize: normalize(11),
              marginTop: w * 0.03,
              marginLeft: w * 0.045,
            },
          ]}>
          As a Buyer
        </Text>

        {buyerPackages.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.title}
              style={
                index == content.length - 1
                  ? [styles.card, {marginBottom: w * 0.07}]
                  : index == 0
                  ? [styles.card, {marginTop: w * 0.05}]
                  : styles.card
              }
              onPress={() =>
                navigation.navigate('WorkPackageDetails')
              }>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: w * 0.12,
                    height: w * 0.12,
                    borderRadius: w * 0.06,
                  }}
                  resizeMode="contain"
                  source={{uri: item.image}}
                />
              </View>
              <View style={{flex: 4, justifyContent: 'center'}}>
                <Text style={styles.txt6}>{item.title}</Text>
                <Text style={styles.txt7}>{item.content}</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{alignItems: 'center', justifyContent: 'center'}}>
                  <LinearGradient
                    colors={['#6EB4FF', '#7889FF']}
                    style={styles.linearGradient}>
                    <Icon2
                      // style={{marginRight:w*0.03}}
                      name="keyboard-arrow-right"
                      size={normalize(25)}
                      color="white"
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}

        <LinearGradient
          colors={['#6EB4FF', '#7889FF']}
          style={styles.linearGradient2}
          start={{x: 0.7, y: 0}}
          // start={[0, 1]} end={[1, 0]}
        >
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.setState({show: true})}
            onPress={() => navigation.navigate('CreateWorkPackage')}>
            <Text style={styles.txt9}>Create Work Package</Text>
            <View style={styles.iconContainer}>
              <Icon3 name={'plus'} size={normalize(13)} color="#7889FF" />
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F8FF',
  },
  img: {
    width: w * 0.18,
    height: w * 0.18,
    borderRadius: w * 0.09,
    marginTop: w * 0.15,
    marginBottom: w * 0.03,
  },
  name: {
    color: '#002364',
    fontSize: normalize(19),
    fontFamily: 'Roboto-Medium',
  },
  iconContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: w * 0.08,
    height: w * 0.08,
    borderRadius: w * 0.04,
    backgroundColor: '#DBE2ED',
    position: 'absolute',
    top: w * 0.12,
    right: w * 0.32,
    zIndex: 1,
  },
  view1: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: w * 0.9,
    marginTop: w * 0.12,
  },
  txt1: {
    fontSize: normalize(9),
    color: '#9DA2C9',
    fontFamily: 'Roboto',
    marginTop: w * 0.01,
  },
  txt2: {
    fontSize: normalize(13),
    color: '#F2F8FF',
    fontFamily: 'Roboto-Medium',
    marginVertical: w * 0.015,
    marginHorizontal: w * 0.03,
  },
  txt3: {
    fontSize: normalize(11),
    color: '#7889FF',
    fontFamily: 'Roboto-Medium',
  },
  txt4: {
    fontSize: normalize(15),
    color: '#7889FF',
    fontFamily: 'Roboto',
  },
  txt5: {
    fontSize: normalize(33),
    color: '#002364',
    fontFamily: 'Roboto',
  },
  img5: {
    width: w * 0.12,
    height: w * 0.12,
    marginLeft: w * 0.08,
  },
  btn2: {
    backgroundColor: '#7889FF',
    borderRadius: 20,
    marginTop: w * 0.02,
  },
  counterContainer: {
    backgroundColor: '#4AFCFE',
    width: w * 0.06,
    height: w * 0.06,
    borderRadius: w * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: w * 0.42,
    right: w * 0.3,
    zIndex: 1,
  },
  packagesContainer: {
    marginTop: 20,
    // height:320,
    width: w * 0.9,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  cardsContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevatedCards: {
    width: w - 100,
    height: 70,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  linearGradient: {
    width: w * 0.08,
    height: w * 0.08,
    borderRadius: w * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: w * 0.85,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
    height: w * 0.17,
    marginTop: w * 0.08,
    shadowColor: 'black',
    shadowOffset: {
      width: w * 0.1,
      height: 6,
    },
    shadowOpacity: 0.07,
    shadowRadius: 5.46,

    elevation: 5,
  },
  txt6: {
    fontSize: normalize(13),
    color: '#002364',
    fontFamily: 'Roboto',
  },
  txt7: {
    fontSize: normalize(11),
    color: '#9DA2C9',
    fontFamily: 'Roboto',
  },
  txt8: {
    fontSize: normalize(11),
    color: '#7889FF',
    fontFamily: 'Roboto-Medium',
    marginLeft: 'auto',
    marginRight: w * 0.01,
  },
  linearGradient2: {
    width: w * 0.88,
    height: w * 0.13,
    borderRadius: 20,
    marginTop: w * 0.06,
    marginBottom: w * 0.08,
  },
  btn: {
    width: w * 0.88,
    height: w * 0.13,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: w * 0.08,
    height: w * 0.08,
    borderRadius: w * 0.04,
    marginLeft: w * 0.06,
  },
  txt9: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: normalize(13),
    fontWeight: 'bold',
  },
});

export default Home;