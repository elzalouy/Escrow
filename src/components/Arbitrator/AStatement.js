import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import normalize  from '../../utils/normalize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class AStatement extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>

                <View style={styles.view1}>
                <View style={[styles.card,{marginTop:w*0.05}]}>
                <View>
                <Image source={{uri: 'aquatics'}} style={styles.img2} resizeMode="cover"/>
                <Image source={{uri: 'oprojects'}} style={styles.img4} resizeMode="cover"/>
                </View>
                <View style={{marginLeft:w*0.08}}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.txt2}>Buyer</Text>
                <Text style={[styles.txt2,{marginLeft:w*0.1}]}>Supplier</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.txt3}>Aquatics | Oprojects</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={[styles.txt2,{fontSize:normalize(11),marginTop:w*0.01}]}>6th June</Text>
                </View>
                </View>
                </View>
                </View>

                <View style={[styles.card,{marginTop:w*0.1}]}
                >
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'board'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Document Name</Text>
                <Text style={styles.txt2}>by Buyer | 22/3/2020</Text>
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
                <Text style={styles.txt2}>by Supplier | 22/3/2020</Text>

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
                <Text style={styles.txt2}>by Buyer | 22/3/2020</Text>

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



            </ScrollView>
        )
    }
}
const styles=   StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:'#F2F8FF',
    },
    img2:{
        width:w*0.14,
        height:w*0.14,
        borderRadius:w*0.07
    },
    img4:{
        width:w*0.08,
        height:w*0.08,
        borderRadius:w*0.04,
        position:'absolute',
        left:w*0.1,
        top:w*0.08,
        borderColor:'white',
        borderWidth:2
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
    }
})