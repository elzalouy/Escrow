import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import normalize from '../utils/normalize';
import { logout } from '../httpService/auth'
import { useDispatch } from 'react-redux';
import {AppActions} from '../store/AppState';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const settings=()=>{
  const dispatch = useDispatch();
  const [visible,setVisible]=useState(false);

  const onHandleLogout= async()=>{
    const result=await logout();
    if(!result.error) dispatch(AppActions.onChangeAppState([{element:'isLoggedIn',value:false}]))
    setVisible(false);
    this.props.navigation2.navigate('Auth', { screen: 'Login'});
  }
  return (
    <View>
      <TouchableOpacity
        style={{
          width: w * 0.2,
          height: w * 0.08,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPressIn={()=>setVisible(false)}
        onPress={() => {
          setVisible(true)
        }} >
        <Icon name="more-horiz" size={normalize(23)} color="black" />
      </TouchableOpacity>
      <Modal
        coverScreen={true}
        //   position="top"
        //   startOpen={true}
        animationDuration={0}
        style={{width: w * 0.65, height: w * 0.52, borderRadius: 20}}
        isOpen={visible}
        swipeToClose={false}
        // onClosed={this.onClose}
        // onOpened={this.onOpen}
      >
        <View style={{alignItems: 'center', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setVisible(false)}>
            <Text style={styles.btnText}>FAQs</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setVisible(false)}>
            <Text style={styles.btnText}>Privacy Policy</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setVisible(false)}>
            <Text style={styles.btnText}>Terms And Connditions</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => onHandleLogout()}>
            <Text style={styles.btnText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
export default settings;
const styles = {
  line: {
    height: 1,
    backgroundColor: 'silver',
    width: w * 0.65,
  },
  btn: {
    // borderRadius: 30,
    // backgroundColor:'silver',
    width: w * 0.65,
    height: w * 0.12,
    // alignSelf:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'Roboto',
    fontSize: normalize(14),
    fontWeight: 'normal',
    color: '#002364',
  },
};
