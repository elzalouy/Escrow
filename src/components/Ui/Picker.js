import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';
import Icon1 from 'react-native-vector-icons/AntDesign';
const w = Dimensions.get('window').width;

const Picker = ({onHandleUploadFile,fileName}) => {
  return (
    <TouchableOpacity
      style={styles.inputFileStyle}
      onPress={() => onHandleUploadFile()}>
      <Text style={styles.inputFileTextStyle}>{fileName.length>0?fileName:'Upload proof of auth'}</Text>
      <Icon1 name={'upload'} style={styles.inputFileIconStyle}></Icon1>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  inputFileStyle: {
    color: '#97ABBF',
    textAlignVertical: 'bottom',
    paddingLeft: 5,
    height: 60,
    width: w - 100,
    backgroundColor: '#f1f8ff',
    borderBottomWidth: 1,
    borderBottomColor: '#7889FF',
    paddingTop: 25,
    paddingLeft: 5,
    flexDirection: 'row',
  },
  inputFileTextStyle: {
    color: '#97ABBF',
    width:w-140
  },
  inputFileIconStyle: {
    color: '#7889FF',
    fontSize: 22,
  },
});
export default Picker;
