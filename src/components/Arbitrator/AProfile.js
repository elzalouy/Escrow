import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import normalize  from '../../utils/normalize';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class AProfile extends Component {
    constructor(){
        super();
        this.state = {
          show: false,
        }
      }
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                <Image source={{uri: 'user'}} style={styles.img} resizeMode="cover"/>
                <Text style={styles.name}> Ahmed </Text>
                <View style={styles.btnCounter} >
                    <Text style={styles.counter}>1</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('ADisputes')}>
                        <Text style={styles.btnTxt}>New Disputes</Text>
                    </TouchableOpacity>
                <View style={styles.view2}>
                <Text style={styles.txt}>Disputes</Text>

                <TouchableOpacity style={[styles.card,{marginTop:w*0.05}]}
                onPress={()=> this.props.navigation.navigate('AWorkPackage')}>
                <View>
                <Image source={{uri: 'aquatics'}} style={styles.img2} resizeMode="cover"/>
                <Image source={{uri: 'oprojects'}} style={styles.img3} resizeMode="cover"/>
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
                <Text style={[styles.txt2,{fontSize:normalize(11),marginTop:w*0.01}]}>Mobile App</Text>
                </View>

                </View>
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>

                <Icon2
                // style={{marginRight:w*0.03}}
                name='keyboard-arrow-right'
                size={normalize(25)}
                color="white"
                /> 
                </LinearGradient>

                </TouchableOpacity>
                <View  style={styles.line}/>

                <TouchableOpacity style={styles.card} onPress={()=> this.props.navigation.navigate('AWorkPackage')}>
                <View>
                <Image source={{uri: 'oprojects'}} style={styles.img2} resizeMode="cover"/>
                <Image source={{uri: 'user'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{marginLeft:w*0.08}}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.txt2}>Buyer</Text>
                <Text style={[styles.txt2,{marginLeft:w*0.1}]}>Supplier</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.txt3}>Oprojects | Joey Tribiani</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={[styles.txt2,{fontSize:normalize(11),marginTop:w*0.01}]}>Aquatics App Development</Text>
                </View>

                </View>
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>

                <Icon2
                // style={{marginRight:w*0.03}}
                name='keyboard-arrow-right'
                size={normalize(25)}
                color="white"
                /> 
                </LinearGradient>

                </TouchableOpacity>
                <View  style={styles.line}/>

                <TouchableOpacity style={[styles.card,{marginBottom:w*0.07}]} onPress={()=> this.props.navigation.navigate('AWorkPackage')}>
                <View>
                <Image source={{uri: 'oprojects'}} style={styles.img2} resizeMode="cover"/>
                <Image source={{uri: 'user'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{marginLeft:w*0.08}}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.txt2}>Buyer</Text>
                <Text style={[styles.txt2,{marginLeft:w*0.1}]}>Supplier</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.txt3}>Oprojects | Monica Geller</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={[styles.txt2,{fontSize:normalize(11),marginTop:w*0.01}]}>Aquatics Backend</Text>
                </View>

                </View>
                <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>

                <Icon2
                // style={{marginRight:w*0.03}}
                name='keyboard-arrow-right'
                size={normalize(25)}
                color="white"
                /> 
                </LinearGradient>

                </TouchableOpacity>
                
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
        width:w*0.18,
        height:w*0.18,
        borderRadius:w*0.09,
        marginTop:w*0.07,
        marginBottom:w*0.03
    },
    name:{
        color:'#002364',
        fontSize:normalize(19),
        fontFamily:'Roboto-Medium'
    },
    txt:{
        color:'#7889FF',
        fontFamily:'Roboto',
        marginTop:w*0.05,
        marginLeft:w*0.05,
        fontSize:normalize(15),
        alignSelf:'flex-start'
    },
    view2 : {
        backgroundColor:'white',
        marginTop:w*0.12,
        borderRadius:20,
        width:w*0.9,
        alignItems:'center'
    },
    txt1:{
        color:'#9DA2C9',
        alignSelf:'flex-start',
        fontFamily:'Roboto',
        marginTop:w*0.05,
        marginLeft:w*0.05,
        fontSize:normalize(15)
    },
    txt2:{
        fontSize:normalize(9),
        color:'#9DA2C9',
        fontFamily:'Roboto'
    },
    txt3:{
        fontSize:normalize(11),
        color:'#002364',
        fontFamily:'Roboto',
        marginTop:w*0.01
    },
    line:{
        height:1,
        backgroundColor:'#E8EBFD',
        width:w*0.8,
        alignSelf:'center',
        marginTop:w*0.02
    },
    btn:{
        backgroundColor:'#9F2D47',
        width:w*0.36,
        height:w*0.08,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginTop:w*0.05,
        zIndex:1,
    },
    btnTxt:{
        color:'white',
        fontFamily:'Roboto-Medium',
        fontSize:normalize(13)
    },
    btnCounter:{
        position:'absolute',
        top:w*0.37,
        right:w*0.3,
        backgroundColor:'#4AFCFE',
        width:w*0.06,
        height:w*0.06,
        borderRadius:w*0.03,
        justifyContent:'center',
        alignItems:'center',
        zIndex:2,
    },
    counter:{
        color:'#9F2D47',
        fontFamily:'Roboto-Medium',
        fontSize:normalize(11)
    },
    linearGradient:{
        width:w*0.08,
        height:w*0.08,
        borderRadius:w*0.04,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'auto'
    },
    card:{
        width:w*0.8,
        height:w*0.2,
        alignItems:'center',
        flexDirection:'row'
    },
    img2:{
        width:w*0.14,
        height:w*0.14,
        borderRadius:w*0.07
    },
    img3:{
        width:w*0.08,
        height:w*0.08,
        borderRadius:w*0.04,
        position:'absolute',
        left:w*0.1,
        top:w*0.08,
        borderColor:'white',
        borderWidth:2
    }
   
})
