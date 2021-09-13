import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements';
import normalize from '../../utils/normalize';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {UserActions} from '../../store/UserState';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const CreateWorkPackage = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.User.newWorkPackage);

  const onHandleChangeInput = (element, value) => {
    dispatch(UserActions.onChangePackage([{element, value}]));
  };

  const onSubmit = () => {
    navigation.navigate('UserWorkPackage');
  };

  return (
    <View style={styles.container}>
        {/* Title of work package */}
      <Input
        containerStyle={[styles.input, {marginTop: w * 0.2}]}
        placeholder="Name"
        placeholderTextColor="#9DA2C9"
        inputStyle={styles.inputText}
        inputContainerStyle={{borderBottomWidth: 0}}
        onChangeText={text => onHandleChangeInput('title', text)}
        value={state.title}
        leftIconContainerStyle={{marginLeft: 7, marginRight: 8}}
      />
      {/* Work package short content */}
      <Input
        containerStyle={styles.input}
        placeholder="Description"
        placeholderTextColor="#9DA2C9"
        inputStyle={styles.inputText}
        inputContainerStyle={{borderBottomWidth: 0}}
        onChangeText={text => onHandleChangeInput('content', text)}
        value={state.content}
        leftIconContainerStyle={{marginLeft: 7, marginRight: 8}}
      />
      {/* Work package price */}
      <Input
        containerStyle={styles.input}
        placeholder="Price / Work Package Value"
        placeholderTextColor="#9DA2C9"
        inputStyle={styles.inputText}
        inputContainerStyle={{borderBottomWidth: 0}}
        onChangeText={text => onHandleChangeInput('amount', text)}
        value={state.amount}
        leftIconContainerStyle={{marginLeft: 7, marginRight: 8}}
      />
      {/* New milestone */}
      <LinearGradient
        colors={['#6EB4FF', '#7889FF']}
        style={[styles.linearGradient2, {marginTop: w * 0.1, marginBottom: 0}]}
        start={{x: 0.7, y: 0}}
      >
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AddMilestone')}>
          <Text style={styles.txt9}>Add Milestone</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        colors={['#6EB4FF', '#7889FF']}
        style={styles.linearGradient2}
        start={{x: 0.7, y: 0}}
      >
        <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
          <Text style={styles.txt9}>Create Work Package</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F8FF',
        //   justifyContent:'center',
        alignItems: 'center',
    },
    input: {
        borderBottomColor: '#7889FF',
    borderBottomWidth: 1,
    width: w * 0.65,
    alignItems: 'flex-start',
    height: w * 0.1,
    marginTop: w * 0.07,
},
inputText: {
    // color:'#9DA2C9'
    fontSize: normalize(12),
    fontFamily: 'Roboto',
    color: '#9DA2C9',
},
txt9: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: normalize(13),
    fontWeight: 'bold',
},
linearGradient2: {
    width: w * 0.7,
    height: w * 0.13,
    borderRadius: 20,
    marginTop: w * 0.25,
    marginBottom: w * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
},
btn: {
    width: w * 0.7,
    height: w * 0.13,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},
linearGradient: {
    width: w * 0.05,
    height: w * 0.05,
    borderRadius: w * 0.025,
    justifyContent: 'center',
    alignItems: 'center',
},
});

export default CreateWorkPackage;