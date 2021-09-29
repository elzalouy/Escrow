import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import normalize from '../../utils/normalize';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const WorkPackageDetails = ({navigation, route}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{alignItems: 'center'}}>
      <View style={[styles.view1, {marginTop: w * 0.12}]}>
        <Text style={styles.txt1}>Escrowbchain App Development</Text>
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Image
              source={{uri: 'oprojects'}}
              style={[styles.img, {borderRadius: w * 0.045}]}
              resizeMode="contain"
            />
            <Text style={styles.txt2}>…………</Text>
          </View>
          <View style={styles.view3}>
            <Image
              source={{uri: 'bag'}}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.txt2}>Technical</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Image
              source={{uri: 'wallet'}}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.txt2}>$1,400</Text>
          </View>
          <View style={styles.view3}>
            <Image
              source={{uri: 'calendar'}}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.txt2}>12/3/2020</Text>
          </View>
        </View>
      </View>
      <View style={styles.view1}>
        <Text style={styles.txt1}>Work Package Details</Text>
        <View style={styles.view4}>
          <Text style={styles.txt3}>$1,250.00</Text>
          <Image
            source={{uri: 'wallet2'}}
            style={styles.img2}
            resizeMode="contain"
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F8FF',
  },
  view1: {
    width: w * 0.9,
    padding: w * 0.05,
    borderRadius: 15,
    backgroundColor: 'white',
    marginTop: w * 0.05,
  },
  txt1: {
    color: '#7889FF',
    fontSize: normalize(15),
    fontFamily: 'Roboto',
  },
  txt3: {color: '#7889FF', fontSize: normalize(20), fontFamily: 'Roboto'},
  view2: {
    width: w * 0.8,
    height: w * 0.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view3: {
    flex: 1,
    height: w * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 2,
    backgroundColor: '#E8EBFD',
    width: w * 0.8,
    alignSelf: 'center',
    marginTop: w * 0.01,
  },
  txt2: {
    color: '#9DA2C9',
    fontSize: normalize(13),
    fontFamily: 'Roboto',
    marginTop: w * 0.01,
  },
  img: {
    width: w * 0.09,
    height: w * 0.09,
  },
});

export default WorkPackageDetails;
