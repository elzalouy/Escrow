import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import normalize  from '../../utils/normalize';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);
export default class Fees extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                <Text style={styles.txt}>- Create Account Fees : FREE 1st year. </Text>

                <Text style={styles.txt}>- Create Work Package Fees : FREE 1st year. </Text>

                <Text style={styles.txt}>- Payment fees will be automatically deducted from Wallets (as per “Fees and T&C” ). </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#F2F8FF",
      alignItems:"center"
  },
  textContainer:{
    width:w*0.9,
    marginTop:w*0.05
  },
  txt:{
    fontFamily:'Roboto',
    fontSize:normalize(14),
    fontWeight:'normal',
    color:'#002364',
    marginTop:w*0.04
  }
})