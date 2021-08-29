import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import normalize  from '../../utils/normalize';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class AWorkPackage extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
            <Image source={{uri: 'aquatics'}} style={styles.img} resizeMode="cover"/>
            <Image source={{uri: 'oprojects'}} style={styles.img2} resizeMode="cover"/>
            <View>
            <View style={{marginTop:w*0.05,alignItems:'center'}}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.txt2}>Buyer</Text>
                <Text style={[styles.txt2,{marginLeft:w*0.2}]}>Supplier</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.txt3}>Aquatics  |  Oprojects</Text>
                </View>
                </View>
                </View>

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

                <View style={[styles.view1,{marginTop:w*0.06}]}>
                <View style={{margin:w*0.05,flexDirection:'row',alignItems:'center'}}>
                    <View>
                <Text style={styles.txt4}>Milestone Value</Text>
                <Text style={styles.txt5}>$1250.00</Text>
                </View>
                <Image source={{uri: 'wallet2'}} style={[styles.img5,{marginLeft:w*0.2}]} resizeMode="contain"/>

                </View>
                </View>

                <TouchableOpacity style={[styles.card,{marginTop:w*0.1}]}
                onPress={()=>this.props.navigation.navigate('APackageDetails')}>
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'board'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
        <Text style={styles.txt1}>Work Package{'\n'}Details</Text>

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

                <TouchableOpacity style={styles.card} onPress={()=>this.props.navigation.navigate('ABuyerDetails')}>
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'aquatics'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
        <Text style={styles.txt1}>Buyer Details</Text>

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

                <TouchableOpacity style={styles.card} onPress={()=>this.props.navigation.navigate('ASupplierDetails')}>
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'oprojects'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
        <Text style={styles.txt1}>Supplier Details</Text>

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

                <TouchableOpacity style={styles.card} onPress={()=>this.props.navigation.navigate('AMilestones')}>
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'flag'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
        <Text style={styles.txt1}>Milestones</Text>

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

                <TouchableOpacity style={styles.card} onPress={()=>this.props.navigation.navigate('ADocuments')}>
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'note'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
        <Text style={styles.txt1}>Documents</Text>

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

                <TouchableOpacity style={[styles.card,{marginBottom:w*0.3}]} onPress={()=>this.props.navigation.navigate('AControl')}>
                <View style={{flex:2,alignItems:'center'}}>
                <Image source={{uri: 'person'}} style={[styles.img3,{marginLeft:0}]} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
        <Text style={styles.txt1}>Desicion Making</Text>

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
    img2:{
        width:w*0.11,
        height:w*0.11,
        borderRadius:w*0.055,
        position:'absolute',
        right:w*0.36,
        top:w*0.17,
        borderColor:'white',
        borderWidth:2
    },
    txt2:{
        fontSize:normalize(15),
        color:'#9DA2C9',
        fontFamily:'Roboto',
    },
    txt3:{
        fontSize:normalize(19),
        color:'#002364',
        fontFamily:'Roboto-Medium',
        marginTop:w*0.01
    },
    view1:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.14

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
    txt5:{
        fontSize:normalize(33),
        color:'#002364',
        fontFamily:'Roboto',
    },
    txt1:{
        fontSize:normalize(13),
        color:'#002364',
        fontFamily:'Roboto',
    },
    line:{
        height:1,
        backgroundColor:'#E8EBFD',
        width:w*0.8,
        alignSelf:'center',
        marginTop:w*0.04
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

})