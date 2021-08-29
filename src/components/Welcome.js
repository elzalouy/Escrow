import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import normalize from '../utils/normalize';
import Icon from 'react-native-vector-icons/AntDesign';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const Welcome = ({navigation}) => {
  let img1Opacity= new Animated.Value(1)
    let img2Opacity= new Animated.Value(0)
    let first= 1;
  return (
    <View style={styles.view1}>
      {first == 1 ? (
        <Animated.View style={{opacity: img1Opacity}}>
          {/* <View style={styles.view1}> */}
          <Image
            source={{uri: 'logo'}}
            style={styles.Background}
            resizeMode="contain"
          />
        </Animated.View>
      ) : (
        <Animated.View style={{opacity: img2Opacity}}>
          <ImageBackground
            source={{uri: 'back'}}
            style={styles.Background2}
            resizeMode="cover">
            <Image
              source={{uri: 'logo1'}}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={{marginTop: h * 0.15, marginLeft: w * 0.07}}>
              <Text style={styles.headerTitleStyle}>Explore</Text>
              <Text style={styles.headerTitleStyle}>Luxurious</Text>
              <Text style={styles.headerTitleStyle}>Experience</Text>
              <TouchableOpacity
                style={styles.iconContainer1}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Login')}>
                <TouchableOpacity
                  style={styles.iconContainer}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('Login')}>
                  <Icon name="arrowright" size={20} color="#2E2D2C" />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Animated.View>
      )}
    </View>
  );
};

const styles = {
  Background: {
    height: w * 0.3,
    width: w * 0.9,
    marginTop: h * 0.4,
  },
  Background2: {
    height: h,
    width: w,
  },
  view1: {
    backgroundColor: '#2E2D2C',
    height: h,
    width: w,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: h * 0.1,
    alignSelf: 'flex-end',
    marginRight: w * 0.1,
    marginBottom: h * 0.05,
  },
  button2: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    height: h * 0.1,
    marginTop: h * 0.47,
    marginLeft: w * 0.8,
    // marginBottom:'35%'
  },
  txt1: {
    color: 'white',
    fontSize: normalize(24),
    fontWeight: 'bold',
    marginTop: h * 0.08,
    alignSelf: 'center',
  },
  txt2: {
    color: 'white',
    fontSize: normalize(16),
    marginTop: h * 0.01,
    alignSelf: 'center',
    width: w * 0.8,
    textAlign: 'center',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: normalize(40),
  },
  iconContainer1: {
    width: w * 0.2,
    height: w * 0.2,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: w * 0.4,
    marginTop: h * 0.003,
  },
  iconContainer: {
    width: w * 0.1,
    height: w * 0.1,
    backgroundColor: '#E4E4E3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  logo: {
    width: w * 0.2,
    height: w * 0.2,
    marginTop: h * 0.05,
    marginLeft: w * 0.06,
  },
};
export default Welcome;
