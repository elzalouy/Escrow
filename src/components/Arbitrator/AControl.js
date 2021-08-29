import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import normalize  from '../../utils/normalize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';


const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class AControl extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
<View style={[styles.viewM,{marginBottom:0}]}>
            <Text style={[styles.txt,{marginLeft:w*0.05}]}>Milestones</Text>

            <View style={styles.card} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <View  style={[styles.indicator,{backgroundColor:'#9F2D47'}]}/>

                <Image source={{uri: 'flag2'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Milestone 2</Text>
                <Text style={styles.txt2}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={styles.txt3}>$750.00</Text>

                </View>
                </View>
                </View>

                <View style={styles.view1}>
                    <View style={styles.subview}>
                    <Text style={styles.txt}>Disputed Milestone Value</Text>
                    <Text style={styles.txt2}>$750.00</Text>
                    </View>

                </View>


                <View style={[styles.viewM,{marginBottom:0}]}>
            <Text style={[styles.txt,{marginLeft:w*0.05}]}>Statement and files from disputing party</Text>

                <View style={styles.card} >
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'board'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Document Name</Text>
                <Text style={styles.txt2}>22/3/2020</Text>

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
                <Text style={styles.txt2}>22/3/2020</Text>

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
                </View>

                <View style={[styles.viewM,{marginBottom:0}]}>
            <Text style={[styles.txt,{marginLeft:w*0.05}]}>Statement and files from other party</Text>

                <View style={styles.card} >
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'board'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt1}>Document Name</Text>
                <Text style={styles.txt2}>22/3/2020</Text>

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
                <Text style={styles.txt2}>22/3/2020</Text>

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
                </View>


                <TouchableOpacity style={styles.view2} onPress={()=>this.props.navigation.navigate('AContact')} activeOpacity={0.5}>
                    <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'callpng'}} style={styles.img} 
                resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt3}>Contact Parties</Text>
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

                </TouchableOpacity>


                <TouchableOpacity style={styles.view3} onPress={()=>this.props.navigation.navigate('AMakeDesition')} activeOpacity={0.5}>
                    <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'done'}} style={styles.img} 
                resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt3}>Make Your Desicion</Text>
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

                </TouchableOpacity>
            <View style={{height:h*0.1}}/>
                </View>

            </ScrollView>
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
        marginTop:w*0.15
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
    view2:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        height:w*0.2,
        marginTop:w*0.08,
        flexDirection:'row',
        alignItems:'center'
    },
    viewM:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.06,
        marginBottom:w*0.15,
    },
    view3:{
        backgroundColor:'#e6ecf9',
        borderColor:'#7889FF',
        borderWidth:1.3,
        borderRadius:15,
        width:w*0.9,
        height:w*0.2,
        marginTop:w*0.04,
        flexDirection:'row',
        alignItems:'center'
    },
    img:{
        width:w*0.13,
        height:w*0.13,
        borderRadius:w*0.065
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
    txt3:{
        color:'#002364',
        fontSize:normalize(13),
        fontFamily:'Roboto',
    },
    linearGradient:{
        width:w*0.08,
        height:w*0.08,
        borderRadius:w*0.04,
        justifyContent:'center',
        alignItems:'center',
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