import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'

import normalize  from '../../utils/normalize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class APackageDetails extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                <View style={styles.view1}>
                    <View style={{margin:w*0.05}}>
                    <Text style={styles.txt4}>Aquatics Mobile Application</Text>
                    <View style={{flexDirection:'row',marginTop:w*0.03,alignItems:'center'}}>
                    <Image source={{uri: 'aquatics'}} style={styles.img3} resizeMode="cover"/>
            <Image source={{uri: 'oprojects'}} style={styles.img4} resizeMode="cover"/>
            <Text style={[styles.txt2,{marginLeft:w*0.05}]}>Aquatics & {'\n'}Oprojects</Text>

            <Image source={{uri: 'calendar'}} style={styles.img5} resizeMode="cover"/>
            <Text style={[styles.txt2,{textAlign:'center'}]}>Date{'\n'}<Text style={{fontSize:normalize(12)}}>12/3/2020</Text></Text>
            {/* <Text style={styles.txt2}>12/3/2020</Text> */}

                    </View>

                    <View style={styles.line}/>
                    <View style={{flexDirection:'row',marginTop:w*0.1,marginBottom:w*0.03,alignItems:'center'}}>

                    <Image source={{uri: 'wallet'}} style={[styles.img5,{marginLeft:0}]} resizeMode="contain"/>
                    <Text style={[styles.txt2,{textAlign:'center'}]}>Wallet{'\n'}<Text style={{fontSize:normalize(12)}}>$1,250.00</Text></Text>
                    {/* <Text style={styles.txt2}>$1,250.00</Text> */}
                    <Image source={{uri: 'bag'}} style={[styles.img5,{marginLeft:w*0.18,width:w*0.12}]} resizeMode="contain"/>
                    <Text style={[styles.txt2,{textAlign:'center'}]}>Technical{'\n'}<Text style={{fontSize:normalize(12)}}>Short Description</Text></Text>
                    {/* <Text style={styles.txt2}>Technical</Text> */}
                    </View>



                    </View>
                </View>


                <View style={styles.view1}>
                <View style={{margin:w*0.05}}>
                <Text style={styles.txt4}>Description</Text>
                <Text style={[styles.txt2,{marginTop:w*0.04,marginBottom:w*0.04}]}>Start by taking the 4 raspberries, chop them into tiny segments and introduce the 
                Start by taking the 4 raspberries, chop them into tiny segments and introduce the</Text>

                </View>
                </View>


                <View style={[styles.view1,{marginTop:w*0.06}]}>
                <View style={{margin:w*0.05,flexDirection:'row',alignItems:'center'}}>
                    <View>
                <Text style={styles.txt4}>Milestone Value</Text>
                <Text style={styles.txt5}>$1250.00</Text>
                </View>
                <Image source={{uri: 'wallet2'}} style={[styles.img5,{marginLeft:w*0.2}]} resizeMode="contain"/>

                </View>
                </View>


                <View style={[styles.view1,{marginBottom:w*0.2}]}>
                <View style={{margin:w*0.05}}>
                <Text style={styles.txt4}>Work Package History
</Text>
                <View style={styles.line}/>
                <View style={styles.card}>
                    <View  style={styles.indicator}/>
                    <View style={{marginVertical:w*0.06,marginLeft:w*0.02}}>
                    <Text style={styles.txt3}>Owner Created Project</Text>
                    <Text style={styles.txt1}>1st February</Text>
                    </View>
                </View>
                <View style={styles.line2}/>

                <View style={styles.card}>
                    <View  style={styles.indicator}/>
                    <View style={{marginVertical:w*0.06,marginLeft:w*0.02}}>
                    <Text style={styles.txt3}>Owner Deposit Fund</Text>
                    <Text style={styles.txt1}>2nd March</Text>
                    </View>
                </View>
                <View style={styles.line2}/>

                <View style={styles.card}>
                    <View  style={styles.indicator}/>
                    <View style={{marginVertical:w*0.06,marginLeft:w*0.02}}>
                    <Text style={styles.txt3}>Supplier Accepted Invitation</Text>
                    <Text style={styles.txt1}>3rd May</Text>
                    </View>
                </View>
                <View style={styles.line2}/>

                <View style={styles.card}>
                    <View  style={styles.indicator}/>
                    <View style={{marginVertical:w*0.06,marginLeft:w*0.02}}>
                    <Text style={styles.txt3}>Supplier Complete Milestone 1</Text>
                    <Text style={styles.txt1}>6th June</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View  style={[styles.indicator,{backgroundColor:'#9F2D47'}]}/>
                    <View style={{marginVertical:w*0.06,marginLeft:w*0.02}}>
                    <Text style={[styles.txt3,{color:'#9F2D47'}]}>Supplier Complained on Milestone 2</Text>
                    <Text style={[styles.txt1,{color:'#9F2D47'}]}>6th June</Text>
                    <TouchableOpacity style={styles.btn2} activeOpacity={0.5}
                onPress={()=> this.props.navigation.navigate('AControl')}
                >
                <Text style={styles.txt6}>Control</Text>
                </TouchableOpacity>
                    </View>
                </View>

        
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
    view1:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.12

    },
    txt1:{
        fontSize:normalize(11),
        color:'#9DA2C9',
        fontFamily:'Roboto',
    },
    txt4:{
        fontSize:normalize(15),
        color:'#7889FF',
        fontFamily:'Roboto',
    },
    img3:{
        width:w*0.12,
        height:w*0.12,
        borderRadius:w*0.06,
    },
    img4:{
        width:w*0.08,
        height:w*0.08,
        borderRadius:w*0.04,
        position:'absolute',
        left:w*0.07,
        top:w*0.07,
        borderColor:'white',
        borderWidth:2
    },
    img5:{
        width:w*0.12,
        height:w*0.12,
        marginLeft:w*0.08
    },
    txt2:{
        fontSize:normalize(13),
        color:'#9DA2C9',
        fontFamily:'Roboto',
    },
    line:{
        height:1,
        backgroundColor:'#E8EBFD',
        width:w*0.8,
        alignSelf:'center',
        marginTop:w*0.06
    },
    line2:{
        height:1,
        backgroundColor:'#E8EBFD',
        width:w*0.73,
        alignSelf:'flex-end',
        // marginTop:w*0.06
    },
    txt3:{
        fontSize:normalize(13),
        color:'#7889FF',
        fontFamily:'Roboto-Medium',
    },
    txt5:{
        fontSize:normalize(33),
        color:'#002364',
        fontFamily:'Roboto',
    },
    card:{
        flexDirection:'row',
        alignItems:'center',
    },
    indicator:{
        backgroundColor:'#4AFCFE',
        width:w*0.05,
        height:w*0.05,
        borderRadius:w*0.025
    },
    btn2:{
        borderRadius:15,
        backgroundColor:'#9F2D47',
        width:w*0.2,
        alignItems:'center',
        marginTop:w*0.02
    },
    txt6:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(10),
        margin:w*0.02
    },
})