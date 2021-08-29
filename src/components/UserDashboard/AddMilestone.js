import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import {  Input, } from 'react-native-elements';
import normalize  from '../../utils/normalize'
import LinearGradient from 'react-native-linear-gradient';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class AddMilestone extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            description:'',
            price:'',
            milestones:'',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Input
              containerStyle={[styles.input,{marginTop:w*0.2}]}
              placeholder='Name'
              placeholderTextColor="#9DA2C9" 
              keyboardType='numeric'
              inputStyle={styles.inputText}
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => this.setState({name:text})}
              value={this.state.name}
              
              leftIconContainerStyle={{marginLeft:7,marginRight:8}}
              />
               <Input
              containerStyle={styles.input}
              placeholder='Description'
              placeholderTextColor="#9DA2C9" 
              keyboardType='numeric'
              inputStyle={styles.inputText}
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => this.setState({description:text})}
              value={this.state.description}
              
              leftIconContainerStyle={{marginLeft:7,marginRight:8}}
              />
               <Input
              containerStyle={styles.input}
              placeholder='Value'
              placeholderTextColor="#9DA2C9" 
              keyboardType='numeric'
              inputStyle={styles.inputText}
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => this.setState({price:text})}
              value={this.state.price}
              
              leftIconContainerStyle={{marginLeft:7,marginRight:8}}
              />

             
            

<LinearGradient colors={['#6EB4FF','#7889FF']} style={styles.linearGradient2}  start={{ x: 0.7, y: 0 }}
                // start={[0, 1]} end={[1, 0]}
                >
                    <TouchableOpacity style={styles.btn} onPress={()=>this.setState({show:true})} onPress={()=>this.props.navigation.goBack()}>
                        <Text style={styles.txt9}>Add</Text>
                       
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
    //   justifyContent:'center',
      alignItems:'center'
    },
    input:{
        borderBottomColor:'#7889FF',
        borderBottomWidth:1,
        width:w*0.65,
        alignItems:'flex-start',
        height:w*0.1,
        marginTop:w*0.07
    },
    inputText:{
        // color:'#9DA2C9'
        fontSize:normalize(12),
        fontFamily:'Roboto',
        color:'#9DA2C9'

    },
    txt9:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(13),
        fontWeight:'bold'
    },
    linearGradient2:{
        width:w*0.7,
        height:w*0.13,
        borderRadius:20,
        marginTop:w*0.25,
        marginBottom:w*0.08,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        width:w*0.7,
        height:w*0.13,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    linearGradient:{
        width:w*0.05,
        height:w*0.05,
        borderRadius:w*0.025,
        justifyContent:'center',
        alignItems:'center',
    },
});