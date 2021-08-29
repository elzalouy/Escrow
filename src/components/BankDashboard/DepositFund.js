import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity,ScrollView, Platform } from 'react-native'
import {  Input, } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import normalize  from '../../utils/normalize';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class DepositFund extends Component {
    constructor(){
        super();
        this.state = {
            value:'',
        }
    }
    render() {
        return (
            <View style={styles.container} >
            <ScrollView  keyboardShouldPersistTaps={'handled'} contentContainerStyle={{alignItems:'center'}}>
                 <View style={styles.view2}>
                <Text style={[styles.txt,{marginTop:w*0.05,marginLeft:w*0.05}]}>Package Number</Text>
                <Image source={{uri: 'qrcode2'}} style={styles.qr} resizeMode="contain"/>
                <Text style={styles.txt3}>121247631943</Text>
                </View>


                <View style={styles.view1}>
                    <View style={styles.subview1}>
                        <View style={{flexDirection:'row',marginTop:w*0.05,marginLeft:w*0.05}} activeOpacity={0.7} onPress={()=>{this.animateHeight();}}>
                        <Text style={styles.txt}>Work Package Amount</Text>
                   
                        </View>
                        <Text style={styles.txt2}>$1500.00</Text>
                       
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.subview1}>
                    <Text style={[styles.txt,{marginTop:w*0.05,marginLeft:w*0.05}]}>Wallet Ballance</Text>
                    <Text style={styles.txt2}>$250.00</Text>
                    </View>
                </View>

                <Input
              containerStyle={styles.input}
              placeholder='Please enter Value to be Paid Max $1500'
              placeholderTextColor="#9DA2C9" 
              keyboardType='numeric'
              inputStyle={styles.inputText}
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => this.setState({value:text})}
              value={this.state.value}
              
              leftIconContainerStyle={{marginLeft:7,marginRight:8}}
              />

                <LinearGradient colors={['#6EB4FF','#7889FF']} style={styles.linearGradient2}  start={{ x: 0.7, y: 0 }}
                // start={[0, 1]} end={[1, 0]}
                >
                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('DepositSummary')}>
                        <Text style={styles.txt5}>Deposit Fund</Text>
                    </TouchableOpacity>
                    </LinearGradient>
               
            </ScrollView>
            {Platform.OS === 'ios'?
  <KeyboardSpacer />
:null}
            </View>
        )
    }
}

const styles=   StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:'#F2F8FF',
    },
    view2 : {
        backgroundColor:'white',
        marginTop:w*0.09,
        borderRadius:20,
        width:w*0.9
    },
    txt:{
        color:'#7889FF',
        fontSize:normalize(14),
        fontFamily:'Roboto'
    },
    qr:{
        width:w*0.65,
        height:w*0.13,
        marginLeft:w*0.015,
        marginTop:w*0.015,

    },
    txt3:{
        fontSize:normalize(14),
        color:'#002364',
        marginTop:w*0.02,
        marginBottom:w*0.04,
        marginLeft:w*0.05,
        fontFamily:'Roboto'
    },
    subview1:{
        width:w*0.9,
        height:w*0.28,
        overflow:'hidden'
    },
    line:{
        height:2,
        backgroundColor:'#E8EBFD',
        width:w*0.8,
        alignSelf:'center'
    },
    view1 : {
        backgroundColor:'white',
        marginTop:w*0.07,
        borderRadius:20
    },
    txt2:{
        fontSize:normalize(32),
        color:'#002364',
        marginTop:w*0.02,
        marginLeft:w*0.05,
        fontFamily:'Roboto'

    },
    input:{
        borderBottomColor:'#7889FF',
        borderBottomWidth:1,
        width:w*0.85,
        marginTop:w*0.3,
        alignItems:'flex-start',
        // backgroundColor:'red',
        height:w*0.1
    },
    inputText:{
        // color:'#9DA2C9'
    },
    linearGradient2:{
        width:w*0.88,
        height:w*0.13,
        borderRadius:20,
        marginTop:w*0.16,
        marginBottom:w*0.2,
    },
    btn:{
        width:w*0.88,
        height:w*0.13,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    txt5:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(14),
        fontWeight:'bold'
    },
})