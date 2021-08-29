import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import normalize  from '../../utils/normalize';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class AMilestones extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>    
            <View style={styles.view1}>
                <Text style={styles.txt}>Aquatics Mobile Application</Text>
            <Image source={{uri: 'aquatics'}} style={styles.img} resizeMode="cover"/>
            <Image source={{uri: 'oprojects'}} style={styles.img2} resizeMode="cover"/></View>     

            <View style={[styles.view2,{marginBottom:0}]}>
            <Text style={[styles.txt,{marginLeft:w*0.05}]}>Milestones</Text>

            <View style={styles.card} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <View  style={styles.indicator}/>

                <Image source={{uri: 'flag2'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Milestone 2</Text>
                <Text style={styles.txt2}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={styles.txt3}>$721.00</Text>

                </View>
                </View>



                <View style={styles.card} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <View  style={styles.indicator}/>

                <Image source={{uri: 'flag2'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Milestone 2</Text>
                <Text style={styles.txt2}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={styles.txt3}>$501.00</Text>

                </View>
                </View>



                


                <View style={styles.card} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <View  style={[styles.indicator,{backgroundColor:'#9F2D47'}]}/>

                <Image source={{uri: 'flag'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Milestone 2</Text>
                <Text style={styles.txt2}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={styles.txt3}>$501.00</Text>

                </View>
                </View>


                <View style={[styles.card,{marginBottom:w*0.1}]} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <View  style={[styles.indicator,{borderWidth:1,borderColor:'#4AFCFE',backgroundColor:'white'}]}/>

                <Image source={{uri: 'flag'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Milestone 2</Text>
                <Text style={styles.txt2}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={styles.txt3}>$501.00</Text>

                </View>
                </View>





            </View>

            <View style={styles.view2}>
                <View style={{margin:w*0.05,flexDirection:'row',alignItems:'center'}}>
                    <View>
                <Text style={styles.txt4}>Work Package Value</Text>
                <Text style={styles.txt5}>$1250.00</Text>
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
        width:w*0.9,
        borderRadius:15,
        alignItems:'center',
        marginTop:w*0.1
    },
    img:{
        width:w*0.18,
        height:w*0.18,
        borderRadius:w*0.09,
        marginTop:w*0.02,
        marginBottom:w*0.06
    },
    img2:{
        width:w*0.11,
        height:w*0.11,
        borderRadius:w*0.055,
        position:'absolute',
        right:w*0.32,
        top:w*0.22,
        borderColor:'white',
        borderWidth:2
    },
    txt:{
        color:'#7889FF',
        fontFamily:'Roboto',
        fontSize:normalize(15),
        marginTop:w*0.04
    },
    txt3:{
        color:'#7889FF',
        fontFamily:'Roboto-Bold',
        fontSize:normalize(15),
        opacity:0.7
    },
    txt4:{
        fontSize:normalize(15),
        color:'#7889FF',
        fontFamily:'Roboto',
    },
    txt5:{
        fontSize:normalize(33),
        color:'#002364',
        fontFamily:'Roboto',
    },
    view2:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.06,
        marginBottom:w*0.15,
    },
    card:{
        width:w*0.9,
        height:w*0.18,
        borderRadius:15,
        marginTop:w*0.04,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5.46,
        
        elevation: 5,
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
    img3:{
        width:w*0.09,
        height:w*0.09,
        borderRadius:w*0.045,
        marginLeft:w*0.02
        
    },
    indicator:{
        backgroundColor:'#4AFCFE',
        width:w*0.05,
        height:w*0.05,
        borderRadius:w*0.025
    },
    
})