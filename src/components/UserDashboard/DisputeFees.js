import React, { Component } from 'react'
import { Text, View, StyleSheet, Image,Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import normalize  from '../../utils/normalize';
import LinearGradient from 'react-native-linear-gradient';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class DisputeFees extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.view1}>
                    <Image source={{uri: 'aquatics'}} style={styles.img} resizeMode="contain"/>
                    <View style={styles.circle}>
                        <Text style={{color:'white'}}>O</Text>
                    </View>
                    <View style={styles.line}/>
                    <Text style={styles.txt}>Work Package</Text>
                    <Text style={styles.txt6}>Aquatics Mobile Application</Text>

                    <Text style={styles.txt}>Requested by</Text>
                    <Text style={styles.txt6}>Aquatics</Text>

                    <Text style={styles.txt}>Request Reason</Text>
                    <Text style={[styles.txt6,{marginBottom:w*0.07}]}>Completion of Milestone 3</Text>
                </View>

                <View style={[styles.view1,{marginTop:w*0.05}]}>
                <Text style={[styles.txt,{marginTop:w*0.03}]}>Amount</Text>
                    <Text style={styles.txt2}>$1500.00</Text>
                </View>
                <LinearGradient colors={['#6EB4FF','#7889FF']} style={styles.linearGradient2}  start={{ x: 0.7, y: 0 }}>
                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('DisputeReciept')}>
                        <Text style={styles.txt5}>Submit</Text>
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
    view1:{
        alignItems:'flex-start',
        width:w*0.9,
        backgroundColor:'white',
        marginTop:w*0.1,
        borderRadius:15
    },
    img:{
        width:w*0.16,
        height:w*0.16,
        borderRadius:w*0.08,
        marginTop:w*0.05,
        alignSelf:'center'
    },
    circle:{
        position:'absolute',
        right:w*0.33,
        top:w*0.13,
        backgroundColor:'#414141',
        width:w*0.1,
        height:w*0.1,
        borderRadius:w*0.05,
        borderColor:'white',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        height:2,
        backgroundColor:'#E8EBFD',
        width:w*0.8,
        alignSelf:'center',
        marginTop:w*0.05,
    },
    txt:{
        color:'#7889FF',
        fontSize:normalize(12),
        fontFamily:'Roboto-Bold',
        marginLeft:w*0.05,
        marginTop:w*0.05
    },
    txt2:{
        color:'#002364',
        fontSize:normalize(22),
        fontFamily:'Roboto-Bold',
        marginLeft:w*0.05,
        marginBottom:w*0.02
    },
    txt6:{
        fontSize:normalize(12),
        color:'#002364',
        fontFamily:'Roboto',
        marginLeft:w*0.05

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
        marginTop:w*0.05,
        marginBottom:w*0.3,
    },
    txt5:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(13),
        fontWeight:'bold'
    },
})