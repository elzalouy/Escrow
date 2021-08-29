import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Image,TouchableOpacity } from 'react-native'
import  normalize  from '../../utils/normalize';
import {  Input, } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class UserDepositFund extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
        }
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={[styles.view1,{marginTop:w*0.15}]}>
                <Text style={styles.txt1}>Your Wallet Balance</Text>
                <View style={styles.view4}>
                <Text style={styles.txt3}>$250.00</Text>
                <Image source={{ uri: 'wallet2' }} style={styles.img} resizeMode="contain" />
                </View>
                </View>

                <View style={styles.view1}>
                <Text style={styles.txt1}>Work Package Value</Text>
                <View style={styles.view4}>
                <Text style={styles.txt3}>$1,250.00</Text>
                <Image source={{ uri: 'wallet2' }} style={styles.img} resizeMode="contain" />
                </View>
                </View>

                {/* <View style={[styles.view1,{marginTop:w*0.07,}]}>
                <Text style={styles.txt1}>Fund Deposited</Text>
                <View style={{alignSelf:'center',marginTop:w*0.05,}}>
                <View style={styles.back}>
                <Text style={[styles.txt3,{marginTop:0,fontSize:normalize(30)}]}>50%</Text>
                <Text style={[styles.txt1,{fontFamily:'Roboto-Medium',textAlign:'center'}]}>$625.00 / $1250.00</Text>

                    </View>
                <View style={styles.progress}>

                    </View>


                </View>
                <Text style={[styles.inputText,{fontSize:normalize(14),alignSelf:'center',marginTop:w*0.07}]}>10/6/2020</Text>

                </View> */}

            <View style={{flexDirection:'row',alignItems:'center',marginTop:w*0.1}}>
            <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>
                <Icon3
                name='minus' size={normalize(12)} color="#E8EBFD"/> 
                </LinearGradient>
                <Input
              containerStyle={styles.input}
              placeholder='Please enter Value to be Deposited'
              placeholderTextColor="#9DA2C9" 
              keyboardType='numeric'
              inputStyle={styles.inputText}
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => this.setState({name:text})}
              value={this.state.name}
              
              />
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>
                <Icon3
                name='plus' size={normalize(12)} color="#E8EBFD"/> 
                </LinearGradient>

            </View>

            <LinearGradient colors={['#6EB4FF','#7889FF']} style={styles.linearGradient2}  start={{ x: 0.7, y: 0 }}
                // start={[0, 1]} end={[1, 0]}
                >
                    <TouchableOpacity style={styles.btn} onPress={()=>this.setState({show:true})} onPress={()=>this.props.navigation.push('UserWorkPackage',
                    {
                        waitingForConfirmation:1
                        }
                        )}>
                        <Text style={styles.txt9}>Deposit Fund</Text>
                       
                    </TouchableOpacity>
                    </LinearGradient>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F8FF',
    },
    view1:{
        width:w*0.9,
        padding:w*0.05,
        borderRadius:15,
        backgroundColor:'white',
        marginTop:w*0.05
    },
    txt1: {
        color: '#7889FF',
        fontSize: normalize(15),
        fontFamily: 'Roboto',
    },
    img:{
        width:w*0.11,
        height:w*0.11,
        borderRadius:w*0.055,
        marginLeft:'auto',
        marginRight:w*0.03
    },
    txt3:{
        color: '#002364',
        fontSize: normalize(32),
        fontFamily: 'Roboto',
        marginTop:w*0.02
    },
    view4:{
        flexDirection:'row',
        alignItems:'center'
    },
    back:{
        width:w*0.4,
        height:w*0.4,
        borderRadius:w*0.2,
        borderColor:'#D7FAFA',
        borderWidth:w*0.03,
        justifyContent:'center',
        alignItems:'center'
        
    },
    progress:{
        width:w*0.4,
        height:w*0.4,
        borderRadius:w*0.2,
        borderColor:'#4AFCFE',
        borderWidth:w*0.03,
        position:'absolute',
        borderLeftColor: 'transparent',
        borderBottomColor: 'transparent',
        borderBottomColor: 'transparent',
        transform:[{rotateZ: '45deg'}],
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        },
        input:{
            borderBottomColor:'#7889FF',
            borderBottomWidth:1,
            width:w*0.63,
            alignItems:'flex-start',
            height:w*0.1,
            marginTop:w*0.01,
            marginHorizontal:w*0.05
        },
        inputText:{
            // color:'#9DA2C9'
            fontSize:normalize(11),
            fontFamily:'Roboto',
            color:'#9DA2C9'
        },
        linearGradient:{
            width:w*0.07,
            height:w*0.07,
            borderRadius:w*0.035,
            justifyContent:'center',
            alignItems:'center',
        },
        linearGradient2:{
            borderRadius:20,
            marginTop:w*0.2,
            marginBottom:w*0.15,
            justifyContent:'center',
            alignItems:'center'
        },
        btn:{
            width:w*0.85,
            height:w*0.13,
            borderRadius:20,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row'
        },
        txt9:{
            color:'white',
            fontFamily:'Roboto',
            fontSize:normalize(13),
            fontWeight:'bold'
        },
        
});