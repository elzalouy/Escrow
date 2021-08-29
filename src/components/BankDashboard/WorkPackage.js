import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import normalize  from '../../utils/normalize';
import LinearGradient from 'react-native-linear-gradient';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class WorkPackage extends Component {
    constructor(){
        super();
        this.state = {
            animatedHeight:new Animated.Value(w*0.28),
        }
    }

animateHeight = () =>{
  if(this.state.animatedHeight._value==(w*0.28)){
  Animated.timing(
  this.state.animatedHeight,
  {
  toValue: w*0.98,
  duration: 350,
  }
  ).start();
  }
  else if(this.state.animatedHeight._value==(w*0.98)){
  Animated.timing(
  this.state.animatedHeight,
  {
  toValue: w*0.28,
  duration: 350,
  }
  ).start(()=>{
//   this.extendRecent();
  });
  }
  
  }
 
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.view1}>
                    <Animated.View style={[styles.subview1,{height:this.state.animatedHeight}]}>
                        <TouchableOpacity style={{flexDirection:'row',marginTop:w*0.05,marginLeft:w*0.05}} activeOpacity={0.7} onPress={()=>{this.animateHeight();}}>
                        <Text style={styles.txt}>Work Package Amount</Text>
                        <Icon
                        name='keyboard-arrow-down' size={normalize(20)} color="#9DA2C9"/> 
                        </TouchableOpacity>
                        <Text style={styles.txt2}>$1500.00</Text>
                        <View style={styles.card}>
                            <View style={styles.subcard1}>
                            <Image source={{uri: 'flag'}} style={styles.img2} resizeMode="contain"/>

                            </View>
                            <View style={styles.subcard2}>
                            <Text style={[styles.txt,{fontSize:normalize(12)}]}>Milestone 1</Text>
                            <Text style={styles.txt6}>$500.00</Text>
                            </View>
                            <View style={styles.subcard2}></View>

                        </View>

                        <View style={styles.card}>
                            <View style={styles.subcard1}>
                            <Image source={{uri: 'flag'}} style={styles.img2} resizeMode="contain"/>

                            </View>
                            <View style={styles.subcard2}>
                            <Text style={[styles.txt,{fontSize:normalize(12)}]}>Milestone 2</Text>
                            <Text style={styles.txt6}>$500.00</Text>
                            </View>
                            <View style={styles.subcard2}></View>
                            
                        </View>

                        <View style={styles.card}>
                            <View style={styles.subcard1}>
                            <Image source={{uri: 'flag2'}} style={styles.img2} resizeMode="contain"/>

                            </View>
                            <View style={styles.subcard2}>
                            <Text style={[styles.txt,{fontSize:normalize(12)}]}>Milestone 3</Text>
                            <Text style={styles.txt6}>$500.00</Text>
                            </View>
                            <View style={styles.subcard2}>
                            <View style={styles.paid}>
                                <Text style={styles.txt7}>Paid</Text>
                            <Icon2
                            style={{marginLeft:w*0.01}}
                            name='check'
                            size={normalize(15)}
                            color="#7889FF"
                            /> 
                            </View>
                            </View>
                            
                        </View>
                    </Animated.View>
                    <View style={styles.line}/>
                    <View style={styles.subview1}>
                    <Text style={[styles.txt,{marginTop:w*0.05,marginLeft:w*0.05}]}>Wallet Ballance</Text>
                    <Text style={styles.txt2}>$250.00</Text>
                    </View>
                </View>

                <View style={styles.view2}>
                <Text style={[styles.txt,{marginTop:w*0.05,marginLeft:w*0.05}]}>Package Number</Text>
                <Image source={{uri: 'qrcode2'}} style={styles.qr} resizeMode="contain"/>
                <Text style={styles.txt3}>121247631943</Text>


                </View>


                <TouchableOpacity style={[styles.view3,{marginTop:w*0.13}]} onPress={()=>this.props.navigation.navigate('Profile')}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri: 'user'}} style={styles.img} resizeMode="cover"/>
                </View>
                <View style={{flex:3,justifyContent:'center',alignItems:'flex-start'}} >
                <Text style={[styles.txt,{marginLeft:0,fontSize:normalize(13)}]}>Mina Ezzat Rawi Said</Text>
                <Text style={styles.txt4}>Buyer Details</Text>

                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}
// start={{x: 0, y: 0}} end={{x: 1, y: 0}}
>

                <Icon
                // style={{marginRight:w*0.03}}
                name='keyboard-arrow-right'
                size={normalize(30)}
                color="white"
                /> 
</LinearGradient>
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.view3,{marginTop:w*0.03}]} onPress={()=>this.props.navigation.navigate('Profile2')}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri: 'oprojects'}} style={styles.img} resizeMode="cover"/>
                </View>
                <View style={{flex:3,justifyContent:'center',alignItems:'flex-start'}}>
                <Text style={[styles.txt,{marginLeft:0,fontSize:normalize(13)}]}>O-Projects</Text>
                <Text style={styles.txt4}>Work Package Details</Text>

                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>
                <Icon
                name='keyboard-arrow-right'
                size={normalize(30)}
                color="white"
                /> 
        </LinearGradient>
                </View>
                </TouchableOpacity>

                <LinearGradient colors={['#6EB4FF','#7889FF']} style={styles.linearGradient2}  start={{ x: 0.7, y: 0 }}
                // start={[0, 1]} end={[1, 0]}
                >
                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('DepositFund')}>
                        <Text style={styles.txt5}>Deposit Fund</Text>
                    </TouchableOpacity>
                    </LinearGradient>
            </ScrollView>
        )
    }
}
const styles=   StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:'#F2F8FF',
    //   alignItems:'center'
    },
    view1 : {
        backgroundColor:'white',
        marginTop:w*0.07,
        borderRadius:20
    },
    view2 : {
        backgroundColor:'white',
        marginTop:w*0.06,
        borderRadius:20,
        width:w*0.9
    },
    view3 : {
        backgroundColor:'white',
        borderRadius:20,
        width:w*0.9,
        flexDirection:'row',
        height:w*0.18
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
    txt:{
        color:'#7889FF',
        fontSize:normalize(14),
        fontFamily:'Roboto'
    },
    txt2:{
        fontSize:normalize(32),
        color:'#002364',
        marginTop:w*0.02,
        marginLeft:w*0.05,
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
    txt4:{
        color:'#9DA2C9',
        fontSize:normalize(11),
        fontFamily:'Roboto'

    },
    linearGradient:{
        width:w*0.1,
        height:w*0.1,
        borderRadius:w*0.05,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:w*0.12,
        height:w*0.12,
        borderRadius:w*0.06
    },
    btn:{
        width:w*0.88,
        height:w*0.13,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    linearGradient2:{
        width:w*0.88,
        height:w*0.13,
        borderRadius:20,
        marginTop:w*0.2,
        marginBottom:w*0.3,
    },
    txt5:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(14),
        fontWeight:'bold'
    },
    txt6:{
        fontSize:normalize(12),
        color:'#002364',
        fontFamily:'Roboto'
    },
    txt7:{
        color:'#7889FF',
        fontFamily:'Roboto',
        fontSize:normalize(11),
        fontWeight:'bold'
    },
    card:{
        height:w*0.15,
        flexDirection:'row',
        width:w*0.7,
        alignSelf:'center',
        borderRadius:20,
        marginTop:w*0.06,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 1.5,
        },
        shadowOpacity: 0.040,
        shadowRadius: 2,

        elevation: 1,
    },
    subcard1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    subcard2:{
        flex:2,
        justifyContent:'center',
    },
    img2:{
        width:w*0.1,
        height:w*0.1,
        borderRadius:w*0.05
    },
    paid:{
        width:w*0.23,
        height:w*0.09,
        borderRadius:15,
        backgroundColor:'#4AFCFE',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        opacity:0.5
    }
    
})