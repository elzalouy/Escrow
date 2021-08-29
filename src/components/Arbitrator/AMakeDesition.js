import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import normalize  from '../../utils/normalize';
import {  Input, } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class AMakeDesition extends Component {
    constructor(){
        super();
        this.state = {
            value:'',
            value1:'',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>
                    <View style={styles.subview}>
                    <Text style={styles.txt}>Milestone Value</Text>
                    <Text style={styles.txt2}>$750.00</Text>
                    </View>

                </View>

                <View style={[styles.card,{marginTop:w*0.12}]}>
                <Image source={{uri: 'aquatics'}} style={styles.img} 
                resizeMode="cover"/>
                <Input
              containerStyle={styles.input}
              placeholder='Please enter Buyer Percentage'
              placeholderTextColor="#9DA2C9" 
              keyboardType='numeric'
              inputStyle={styles.inputText}
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => this.setState({value:text})}
              value={this.state.value}
              
              leftIconContainerStyle={{marginLeft:7,marginRight:8}}
              />
                </View>

                <View style={styles.card}>
                <Image source={{uri: 'oprojects'}} style={styles.img} 
                resizeMode="cover"/>
                <Input
              containerStyle={styles.input}
              placeholder='Please enter Supplier Percentage'
              placeholderTextColor="#9DA2C9" 
              keyboardType='numeric'
              inputStyle={styles.inputText}
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => this.setState({value1:text})}
              value={this.state.value1}
              
              leftIconContainerStyle={{marginLeft:7,marginRight:8}}
              />
                </View>

                <LinearGradient colors={['#6EB4FF','#7889FF']} style={styles.linearGradient2}  start={{ x: 0.7, y: 0 }}>
                    <TouchableOpacity style={styles.btn} 
                    onPress={()=>this.props.navigation.navigate('AControlDispute')}
                    >
                        <Text style={styles.txt5}>Submit</Text>
                    </TouchableOpacity>
                    </LinearGradient>
            </View>
        )
    }
}

const styles=   StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:'#F2F8FF',
      alignItems:'center'
    },
    view1:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.12
    },
    subview:{
        margin:w*0.05
    },
    txt:{
        color:'#7889FF',
        fontFamily:'Roboto',
        fontSize:normalize(15),
        alignSelf:'flex-start'
    },
    txt2:{
        color:'#002364',
        fontSize:normalize(33),
        fontFamily:'Roboto',
        // marginLeft:w*0.05,
        marginTop:w*0.01
    },
    card:{
        flexDirection:'row',
        width:w*0.9,
        alignItems:'center',
        marginTop:w*0.05
    },
    img:{
        width:w*0.15,
        height:w*0.15,
        borderRadius:w*0.075,
    },
    input:{
        borderBottomColor:'#7889FF',
        borderBottomWidth:1,
        width:w*0.65,
        alignItems:'flex-start',
        height:w*0.1,
        marginLeft:w*0.04
    },
    inputText:{
        // color:'#9DA2C9'
        fontSize:normalize(11),
        fontFamily:'Roboto',
        color:'#9DA2C9'

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
        fontSize:normalize(13),
        fontWeight:'bold'
    },
})