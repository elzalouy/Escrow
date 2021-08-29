import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native'
import normalize  from '../../utils/normalize';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class DisputeDocuments extends Component {
    constructor(){
    
        super();
        // this._logInAsync = this._logInAsync.bind(this);
    
        this.state = {
          text:''
    
        }
      }
    
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
               
                <View style={[styles.card,{marginTop:w*0.1}]}
                >
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'board'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Document Name</Text>
                <Text style={styles.txt2}>by Owner | 22/3/2020</Text>
                </View>
                <View style={{flex:2,alignItems:'center'}}>
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>

                <Icon
                // style={{marginRight:w*0.03}}
                name='keyboard-arrow-right'
                size={normalize(25)}
                color="white"
                /> 
                </LinearGradient>

                </View>
                </View>

                <View style={styles.card} >
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'board'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Document Name</Text>
                <Text style={styles.txt2}>by Beneficial | 22/3/2020</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>

                <Icon
                // style={{marginRight:w*0.03}}
                name='keyboard-arrow-right'
                size={normalize(25)}
                color="white"
                /> 
                </LinearGradient>

                </View>
                </View>

                <View style={styles.card} >
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'board'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Document Name</Text>
                <Text style={styles.txt2}>by Owner | 22/3/2020</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>

                <Icon
                // style={{marginRight:w*0.03}}
                name='keyboard-arrow-right'
                size={normalize(25)}
                color="white"
                /> 
                </LinearGradient>

                </View>
                </View>

                
                    <TouchableOpacity style={styles.btn1} onPress={()=>this.setState({show:true})} >
                        <Text style={styles.txt8}>Add Document</Text>
                        {/* <View style={styles.iconContainer}>
                        <Icon3
                        name='plus' size={normalize(13)} color="#7889FF"/> 
                        </View> */}
                        <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>

                        <Icon3
                        name='plus' size={normalize(13)} color="white"/> 
                        </LinearGradient>
                    </TouchableOpacity>

                    <TextInput 
                    style={{width:w*0.9,height:w*0.5,backgroundColor:'white',borderRadius:15,padding:10}}
                    placeholder="Write Your Comment"
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}/>
        <LinearGradient colors={['#6EB4FF','#7889FF']} style={styles.linearGradient2}  start={{ x: 0.7, y: 0 }}
                // start={[0, 1]} end={[1, 0]}
                >
                    <TouchableOpacity style={styles.btn} onPress={()=>this.setState({show:true})} onPress={()=>this.props.navigation.navigate('DisputeFees')}>
                        <Text style={styles.txt9}>Submit</Text>
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
    },
    img3:{
        width:w*0.12,
        height:w*0.12,
        borderRadius:w*0.06,
        
    },
    card:{
        width:w*0.9,
        height:w*0.18,
        borderRadius:15,
        marginTop:w*0.04,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center'
    },
    linearGradient:{
        width:w*0.08,
        height:w*0.08,
        borderRadius:w*0.04,
        justifyContent:'center',
        alignItems:'center',
    },
    txt1:{
        color:'#7889FF',
        fontSize:normalize(12),
        fontFamily:'Roboto'
    },
    txt2:{
        color:'#9DA2C9',
        fontSize:normalize(12),
        fontFamily:'Roboto',
        marginTop:w*0.01
    },
    linearGradient2:{
        width:w*0.6,
        height:w*0.13,
        borderRadius:20,
        marginTop:w*0.06,
        marginBottom:w*0.08,
    },
    btn:{
        width:w*0.6,
        height:w*0.13,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    btn1:{
        width:w*0.6,
        height:w*0.13,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        alignSelf:'flex-end',
        marginBottom:w*0.1,
        marginTop:w*0.03
        // borderColor:'#002364',
        // borderWidth:1
    },
    iconContainer:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width:w*0.08,
        height:w*0.08,
        borderRadius:w*0.04,
        marginLeft:w*0.06
    },
    txt8:{
        color:'#002364',
        fontFamily:'Roboto',
        fontSize:normalize(13),
        fontWeight:'bold',
        marginRight:w*0.05
    },
    txt9:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(13),
        fontWeight:'bold'
    },
})