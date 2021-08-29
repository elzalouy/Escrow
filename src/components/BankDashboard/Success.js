import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import  normalize  from '../../utils/normalize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class Success extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.checkContainer}>
                <Icon2
                            // style={{opacity:0.83}}
                            name='md-checkmark'
                            size={normalize(35)}
                            color="white"
                            />
                </View>
                <View style={styles.subContainer}>
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>
                <Text style={styles.txt}>Successful!</Text>
        </LinearGradient>

        <View style={{flexDirection:'row',marginTop:w*0.04}}>
            <View>
        <Text style={[styles.txt3,{marginTop:w*0.03}]}>Date</Text>
        <Text style={styles.txt4}>October 11,{'\n'}2020</Text>
        </View>
        <View style={{marginLeft:'auto',marginRight:w*0.05,}}>
        <Text style={[styles.txt3,{marginTop:w*0.03,marginLeft:'auto'}]}>Time</Text>
        <Text style={styles.txt4}>03:00 PM</Text>
        </View>
        </View>
        <View style={{flexDirection:'row'}}>
        <View>
        <Text style={styles.txt3}>Work Package</Text>
        <Text style={styles.txt4}>O-Projects{'\n'}{'\n'}Development{'\n'}Owner Name</Text>
        </View>
        <Image source={{uri: 'oprojects'}} style={styles.img} resizeMode="contain"/>
        </View>

        <Text style={styles.txt3}>Amount</Text>
                    <Text style={styles.txt2}>$520.00</Text>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:w*0.15,marginBottom:w*0.1}}>
            <Image source={{uri: 'oprojects'}} style={styles.img2} resizeMode="contain"/>
            <View style={{marginLeft:w*0.05}}>
            <Text style={styles.txt7}>Deposit Fund</Text>
                    <Text style={styles.txt6}>Work Package Name</Text>
            </View>

            </View>
                </View>
                <LinearGradient colors={['#6EB4FF','#7889FF']} style={styles.linearGradient2}  start={{ x: 0.7, y: 0 }}
                // start={[0, 1]} end={[1, 0]}
                >
                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('WorkPackage')}>
                        <Text style={styles.txt5}>Share Reciept</Text>
                        <View style={styles.iconContainer}>
                        <Icon
                        name='arrow-up' size={normalize(15)} color="#7889FF"/> 
                        </View>
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
    subContainer:{
        borderRadius:15,
        marginTop:w*0.15,
        borderRadius:15,
        overflow:'hidden',
        backgroundColor:'white',
        zIndex:1

    },
    linearGradient:{
        height:w*0.4,
        width:w*0.9,
        justifyContent:'center',
        alignItems:'center'
    },
    txt:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(22),
        marginTop:w*0.05
    },
    txt3:{
        color:'#7889FF',
        fontSize:normalize(13),
        fontFamily:'Roboto-Bold',
        marginLeft:w*0.05,
        marginTop:w*0.13
    },
    txt2:{
        color:'#002364',
        fontSize:normalize(22),
        fontFamily:'Roboto-Bold',
        marginLeft:w*0.05,
        marginBottom:w*0.02
    },
    txt4:{
        color:'#002364',
        fontSize:normalize(13),
        fontFamily:'Roboto',
        marginLeft:w*0.05,
        // marginTop:w*0.05
    },
    img:{
        width:w*0.16,
        height:w*0.16,
        borderRadius:w*0.08,
        marginTop:w*0.22,
        marginLeft:'auto',
        marginRight:w*0.05,
    },
    img2:{
        width:w*0.13,
        height:w*0.13,
        borderRadius:w*0.065,
        marginLeft:w*0.1,
    },
    txt7:{
        color:'#7889FF',
        fontSize:normalize(14),
        fontFamily:'Roboto',
    },
    txt6:{
        color:'#9DA2C9',
        fontSize:normalize(11),
        fontFamily:'Roboto',
    },
    linearGradient2:{
        width:w*0.88,
        height:w*0.13,
        borderRadius:20,
        marginTop:w*0.1,
        marginBottom:w*0.2,
    },
    btn:{
        width:w*0.88,
        height:w*0.13,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    iconContainer:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width:w*0.1,
        height:w*0.1,
        borderRadius:w*0.05,
        marginLeft:w*0.06
    },
    txt5:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(13),
        fontWeight:'bold'
    },
    checkContainer:{
        justifyContent:'center',
        alignItems:'center',
        width:w*0.21,
        height:w*0.21,
        borderRadius:w*0.105,
        backgroundColor:'#00ecf8',
        position:'absolute',
        top:w*0.05,
        zIndex:2,
        borderColor:'white',
        borderWidth:4,
        shadowColor: "#4F86C1",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5.46,
        
        elevation: 9,
        
    }
})