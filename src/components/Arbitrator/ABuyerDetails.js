import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import normalize  from '../../utils/normalize';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class ABuyerDetails extends Component {
    constructor(){
        super();
        this.state = {
          show: false,
        }
      }
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                <Image source={{uri: 'aquatics'}} style={styles.img} resizeMode="cover"/>
                <Text style={styles.name}> Aquatics </Text>

                <View style={styles.view2}>
                <Text style={[styles.txt,{marginTop:w*0.05,marginLeft:w*0.05,fontSize:normalize(14),}]}>Package Number</Text>
                <Image source={{uri: 'qrcode2'}} style={styles.qr} resizeMode="contain"/>
                <Text style={styles.txt3}>121247631943</Text>
                </View>

                <Text style={[styles.txt1,{marginTop:w*0.08}]}>Buyer Info</Text>
                <View style={[styles.view2,{marginTop:w*0.03}]}>
                <Text style={styles.txt2}>Bassem Tarek Fawzy</Text>
                <Text style={[styles.txt1,{fontSize:normalize(14),marginTop:w*0.02}]}>CEO at O-Projects</Text>
                <View style={[styles.line,{marginTop:w*0.04}]}/>
                <Text style={[styles.txt1,{marginTop:w*0.01}]}>Gender</Text>
                <Text style={styles.txt}>Male</Text>

                <Text style={styles.txt1}>Phone Number</Text>
                <Text style={styles.txt}>01203567043</Text>

                <Text style={styles.txt1}>Email</Text>
                <Text style={styles.txt}>Bassem77@yahoo.com</Text>

                <Text style={styles.txt1}>Address</Text>
                <Text style={[styles.txt,{marginBottom:w*0.1}]}>19 Doc Ahmed Zaki Street, {'\n'}
                Cairo, Egypt</Text>

                </View>

                <View style={[styles.view2,{justifyContent:'center',alignItems:'center',height:w*0.55,marginBottom:w*0.2}]}>
                <Image source={{uri: 'qrcode'}} style={styles.qrcode} resizeMode="cover"/>
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
    img:{
        width:w*0.16,
        height:w*0.16,
        borderRadius:w*0.08,
        marginTop:w*0.15,
        marginBottom:w*0.03
    },
    name:{
        color:'#002364',
        fontSize:normalize(19),
        fontFamily:'Roboto-Medium'
    },
    txt:{
        color:'#7889FF',
        fontSize:normalize(13),
        fontFamily:'Roboto',
        marginLeft:w*0.08,
        marginTop:w*0.015
    },
    view2 : {
        backgroundColor:'white',
        marginTop:w*0.06,
        borderRadius:20,
        width:w*0.9
    },
    qr:{
        width:w*0.65,
        height:w*0.13,
        marginLeft:w*0.015,
        marginTop:w*0.015,

    },
    txt1:{
        fontSize:normalize(12),
        color:'#9DA2C9',
        alignSelf:'flex-start',
        marginLeft:w*0.08,
        marginTop:w*0.05,
        fontFamily:'Roboto'
    },
    txt2:{
        fontSize:normalize(13),
        color:'#7889FF',
        // alignSelf:'flex-start',
        marginLeft:w*0.08,
        marginTop:w*0.06,
        fontFamily:'Roboto-Medium'
    },
    txt4:{
        fontSize:normalize(13),
        color:'#7889FF',
        marginTop:w*0.08,
        fontFamily:'Roboto'
    },
    txt3:{
        fontSize:normalize(14),
        color:'#002364',
        marginTop:w*0.02,
        marginBottom:w*0.04,
        marginLeft:w*0.05,
        fontFamily:'Roboto'
    },
    line:{
        height:2,
        backgroundColor:'#E8EBFD',
        width:w*0.8,
        alignSelf:'center',
        marginTop:w*0.07
    },
    qrcode:{
        width:w*0.5,
        height:w*0.5,
    },
    linearGradient2:{
        width:w*0.88,
        height:w*0.13,
        borderRadius:20,
        marginTop:w*0.2,
        marginBottom:w*0.3,
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
    qrcode2:{
        width:w*0.8,
        height:w*0.8,
    }
})
