import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, Platform } from 'react-native'
import  normalize  from '../../utils/normalize';
import {  Input, } from 'react-native-elements';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class AControlDispute extends Component {
    constructor(){
        super();
        this.state = {
            value:'',
        }
    }
    render() {
        return (
            <View style={styles.container} keyboardShouldPersistTaps={'handled'} >
                <View style={styles.view1}>
                <View style={styles.view2}>
                <View style={styles.new}/>
                    <View style={styles.msg}>
                    <Text style={styles.txt1}>Supplier</Text>
                    <Text style={styles.txt2}>Supplier Complained on Milestone 2 because they thought the work was done at a certain stage</Text>
                    <Text style={styles.date}>6th June</Text>
                    </View>
                </View>   
                <View style={styles.view3}>                
                <Image source={{uri: 'oprojects'}} style={styles.img} resizeMode="contain"/>
                </View> 
                </View>

                <View style={styles.view1}>
                <View style={styles.view3}>                
                <Image source={{uri: 'user'}} style={styles.img} resizeMode="contain"/>
                </View> 
                <View style={styles.view2}>
                    <View style={styles.msg}>
                    <Text style={[styles.txt1,{color:'#7889FF'}]}>Arbitrator</Text>
                    <Text style={[styles.txt2,{color:'#002364',opacity:1}]}>To solve dispute, Buyer should take 20%
and Supplier 80%</Text>
                    <Text style={styles.date}>9th June</Text>
                    </View>
                </View>   
               
                </View>

                <View style={styles.inputContainer}>
                <Input
              containerStyle={styles.input}
              placeholder='Add in a Comment for Supplier and Buyer'
              placeholderTextColor="#9DA2C9" 
            //   keyboardType='numeric'
              inputStyle={styles.inputText}
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => this.setState({value:text})}
              value={this.state.value}
              
              leftIconContainerStyle={{marginLeft:7,marginRight:8}}
              />
              </View>


              {/* {Platform.OS === 'ios'? */}
  <KeyboardSpacer />
{/* :null} */}
            </View>
        )
    }
}



const styles=   StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:'#F2F8FF',
    },
    view1:{
        flexDirection:'row',
        marginTop:w*0.08,
        alignItems:'center',
        width:w
    },
    view2:{
        flex:4,
        justifyContent:'center',
        alignItems:'center',
        zIndex:1
    },
    view3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    msg:{
        width:w*0.75,
        backgroundColor:'white',
        borderRadius:15
    },
    img:{
        width:w*0.13,
        height:w*0.13,
        borderRadius:w*0.065
    },
    txt1:{
        color:'#9F2D47',
        fontFamily:'Roboto',
        fontSize:normalize(12),
        marginLeft:w*0.04,
        marginTop:w*0.04

    },
    txt2:{
        color:'#9F2D47',
        fontFamily:'Roboto',
        fontSize:normalize(12),
        opacity:0.5,
        width:w*0.6,
        marginLeft:w*0.04,
        marginTop:w*0.01
    },
    date:{
        color:'#9DA2C9',
        fontFamily:'Roboto',
        fontSize:normalize(12),
        marginLeft:w*0.04,
        marginTop:w*0.04,
        marginBottom:w*0.02,
        opacity:0.7,
    },
    new:{
        position:'absolute',
        width:w*0.05,
        height:w*0.05,
        borderRadius:w*0.025,
        top:0,
        right:0,
        backgroundColor:'#9F2D47',
        zIndex:2
    },
    inputContainer:{
        backgroundColor:'white',
        width:w*0.9,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        marginTop:'auto',
        marginBottom:w*0.1
    },
    input:{
        borderBottomColor:'#7889FF',
        borderBottomWidth:1,
        width:w*0.8,
        alignItems:'flex-start',
        height:w*0.1,
        marginVertical:w*0.03
    },
    inputText:{
        // color:'#9DA2C9'
        fontSize:normalize(11),
        fontFamily:'Roboto',
        color:'#9DA2C9'

    },
    
})