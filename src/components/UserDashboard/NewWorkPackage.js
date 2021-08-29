import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import normalize  from '../../utils/normalize';
import {  Overlay, } from 'react-native-elements';

import Icon2 from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';


const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);





export default class NewWorkPackage extends Component {
    constructor(){
        super();
        this.state = {
            isVisible:false,
        }
    }
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>   

            <Overlay
            isVisible={this.state.isVisible}
            windowBackgroundColor="rgba(255, 0, 0, .5)"
            overlayBackgroundColor="rgba(255, 0, 0, .5)"
            overlayStyle={{width:w*0.9,backgroundColor:'white',borderRadius:15}}
            width="auto"
            height="auto"
            onBackdropPress={() => this.setState({ isVisible: false })}
            >
  <View style={styles.overlay}>
      <Text style={styles.txt8}>Request change in:</Text>
      <TouchableOpacity  style={[styles.card,{marginTop:w*0.05}]} onPress={()=>{this.setState({ isVisible: false });this.props.navigation.navigate('RequestChange')}}>
                            <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                            <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06}}
                            resizeMode='contain'
                             source={{uri:'oprojects'}}/>
                             </View>
                                <View  style={{flex:4,justifyContent:'center'}}>
                                    <Text style={styles.txt6}>Work Package Balance</Text>                  
                                    
                                </View>
                               
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.card2} onPress={()=>{this.setState({ isVisible: false });this.props.navigation.navigate('RequestChange')}}>
                        <View  style={styles.card3}>
                            <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                            <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06}}
                            resizeMode='contain'
                             source={{uri:'flag'}}/>
                             </View>
                                <View  style={{flex:4,justifyContent:'center'}}>
                                    <Text style={styles.txt6}>Milestones</Text>                  
                                    
                                </View>
                                
                               
                        </View>
                        <View  style={[styles.card,{marginTop:w*0.05,width:w*0.75,marginLeft:'auto',marginRight:'auto'}]}>
                            <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                            <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06}}
                            resizeMode='contain'
                             source={{uri:'flag'}}/>
                             </View>
                                <View  style={{flex:4,justifyContent:'center'}}>
                                    <Text style={styles.txt6}>Milestone 1</Text>                  
                                    <Text style={styles.txt7}>Frontend Development</Text>
                                    
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
                                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',}}>
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
                        </View>

                        <View  style={[styles.card,{marginTop:w*0.05,width:w*0.75,marginLeft:'auto',marginRight:'auto'}]}>
                            <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                            <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06}}
                            resizeMode='contain'
                             source={{uri:'flag'}}/>
                             </View>
                                <View  style={{flex:4,justifyContent:'center'}}>
                                    <Text style={styles.txt6}>Milestone 2</Text>                  
                                    <Text style={styles.txt7}>Backend Development</Text>
                                    
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
                                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',}}>
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
                        </View>

                        </TouchableOpacity>

  </View>
</Overlay>

     
                 <Image source={{uri: 'user'}} style={styles.img} resizeMode="cover"/>
                <Text style={styles.name}> Buffay Bing </Text>
                
                <TouchableOpacity style={styles.btn2} onPress={()=>this.setState({isVisible:true})}>
                <Text style={styles.btntxt}>Request Change</Text>
                </TouchableOpacity>


                <View style={[styles.view21,{marginTop:w*0.12}]}>
                   <Text style={styles.txt21}>Escrowbchain App Development</Text>
                   <View style={styles.view22}>
                   <View style={styles.view23}>
                   <Image source={{ uri: 'user' }} style={{borderRadius:w*0.055,width:w*0.11,height:w*0.11}} resizeMode="contain" />
                   <Text style={styles.txt22}>Buffay Bing</Text>
                   </View>
                   <View style={styles.view23}>
                   <Image source={{ uri: 'bag' }} style={styles.img2} resizeMode="contain" />
                   <Text style={styles.txt22}>Technical</Text>
                   </View>
                   </View>
                   <View style={styles.line}/>
                   <View style={styles.view22}>
                   <View style={styles.view23}>
                   <Image source={{ uri: 'wallet' }} style={styles.img2} resizeMode="contain" />
                   <Text style={styles.txt22}>$1,400</Text>
                   </View>
                   <View style={styles.view23}>
                   <Image source={{ uri: 'calendar' }} style={styles.img2} resizeMode="contain" />
                   <Text style={styles.txt22}>12/3/2020</Text>
                   </View>
                   </View>
                   
                </View>


                <View style={[styles.view1,{marginTop:w*0.07}]}>
                <View style={{margin:w*0.05,marginBottom:w*0.02,flexDirection:'row',alignItems:'center'}}>
                    <View>
                <Text style={styles.txt4}>Total Ballance</Text>
                <Text style={[styles.txt5,{marginBottom:w*0.04}]}>$1250.00</Text>
                </View>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Wallet')}
                >
                <Image source={{uri: 'wallet2'}} style={[styles.img5,{marginLeft:w*0.2}]} resizeMode="contain"/>
                </TouchableOpacity>

                </View>
                </View>     

                       
                          
                        <TouchableOpacity  style={[styles.card,{marginTop:w*0.05}]} onPress={()=>this.props.navigation.navigate('SupplierDetails')}>
                            <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                            <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06}}
                            resizeMode='contain'
                             source={{uri:'user'}}/>
                             </View>
                                <View  style={{flex:4,justifyContent:'center'}}>
                                    <Text style={styles.txt6}>Buffay Bing</Text>                  
                                    <Text style={styles.txt7}>Supplier Details</Text>
                                    
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
                                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',}}>
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
                        </TouchableOpacity>

                        <TouchableOpacity  style={styles.card} onPress={()=>this.props.navigation.navigate('Milestones')}>
                            <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                            <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06}}
                            resizeMode='contain'
                             source={{uri:'flag'}}/>
                             </View>
                                <View  style={{flex:4,justifyContent:'center'}}>
                                    <Text style={styles.txt6}>Milestones</Text>                  
                                    
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
                                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',}}>
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
                        </TouchableOpacity>


                        <TouchableOpacity  style={[styles.card,{marginBottom:w*0.07}]} onPress={()=>this.props.navigation.push('UserWorkPackage',{waitingForConfirmation:2})}>
                            <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                            <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06}}
                            resizeMode='contain'
                             source={{uri:'note'}}/>
                             </View>
                                <View  style={{flex:4,justifyContent:'center'}}>
                                    <Text style={styles.txt6}>Escrowbchain App Dev.</Text>                  
                                    <Text style={styles.txt7}>Work Package Details</Text>
                                    
                                </View>
                                <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
                                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',}}>
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
                        </TouchableOpacity>




                     <LinearGradient colors={['#6EB4FF','#7889FF']} style={styles.linearGradient2}  start={{ x: 0.7, y: 0 }}
                // start={[0, 1]} end={[1, 0]}
                >
                    <TouchableOpacity style={styles.btn} onPress={()=>this.setState({show:true})} onPress={()=>this.props.navigation.navigate('UserDepositFund')}>
                        <Text style={styles.txt9}>Cash Deposit</Text>
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
    img:{
        width:w*0.18,
        height:w*0.18,
        borderRadius:w*0.09,
        marginTop:w*0.12,
        marginBottom:w*0.03
    },
    name:{
        color:'#002364',
        fontSize:normalize(19),
        fontFamily:'Roboto-Medium'
    },
    view1:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.12

    },
    txt1:{
        fontSize:normalize(9),
        color:'#9DA2C9',
        fontFamily:'Roboto',
        marginTop:w*0.01
    },
    btntxt:{
        fontSize:normalize(12),
        color:'#F2F8FF',
        fontFamily:'Roboto-Medium',
        marginVertical:w*0.015,
        marginHorizontal:w*0.03,
    },
    txt3:{
        fontSize:normalize(11),
        color:'#7889FF',
        fontFamily:'Roboto-Medium',
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
    img5:{
        width:w*0.12,
        height:w*0.12,
        marginLeft:w*0.08
    },
    btn2:{
        backgroundColor:'#9F2D47',
        borderRadius:20,
        marginTop:w*0.02,
    },
    packagesContainer:{
        marginTop:20,
        // height:320,
        width:w*0.9,
        borderRadius:20,
        backgroundColor:"#fff",
        
    },
    cardsContainer:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    elevatedCards:{
        width:w-100,
        height:70,
        justifyContent:'center',
        backgroundColor:'#fff',
        borderRadius:20,
        elevation:10,
        marginTop:20,
        alignSelf:'center'
    },
    linearGradient:{
        width:w*0.08,
        height:w*0.08,
        borderRadius:w*0.04,
        justifyContent:'center',
        alignItems:'center',
    },
    card:{
        backgroundColor:'white',
        width:w*0.85,
        borderRadius:15,
        flexDirection:'row',
        height:w*0.17,
        marginTop:w*0.04,
        shadowColor: "black",
        shadowOffset: {
            width: w*0.01,
            height: 6,
        },
        shadowOpacity: 0.07,
        shadowRadius: 5.46,
        
        elevation: 5,
    },
    txt6:{
        fontSize:normalize(13),
        color:'#002364',
        fontFamily:'Roboto',
    },
    txt7:{
        fontSize:normalize(11),
        color:'#9DA2C9',
        fontFamily:'Roboto',
    },
    linearGradient2:{
        width:w*0.88,
        height:w*0.13,
        borderRadius:20,
        marginTop:w*0.1,
        marginBottom:w*0.15,
    },
    btn:{
        width:w*0.88,
        height:w*0.13,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    txt9:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(13),
        fontWeight:'bold'
    },

    view21:{
        width:w*0.9,
        padding:w*0.05,
        borderRadius:15,
        backgroundColor:'white',
        marginTop:w*0.05
    },
    txt22:{
        color: '#9DA2C9',
        fontSize: normalize(13),
        fontFamily: 'Roboto',
        marginTop:w*0.01
    },
    view22:{
        width:w*0.8,
        height:w*0.3,
        flexDirection:'row',
        alignItems:'center'
    },
    view23:{
        flex:1,
        height:w*0.3,
        justifyContent:'center',
        alignItems:'center',
    },
    line:{
        height:2,
        backgroundColor:'#E8EBFD',
        width:w*0.8,
        alignSelf:'center',
        marginTop:w*0.01
    },
    txt21: {
        color: '#7889FF',
        fontSize: normalize(15),
        fontFamily: 'Roboto',
    },
    img2:{
        width:w*0.09,
        height:w*0.09
    },
  overlay:{
      width:w*0.9,
      borderRadius:20,
    //   backgroundColor:'#F2F8FF',
      paddingVertical:w*0.05,
      overflow:'hidden'

  },
  txt8:{
    color: '#9F2D47',
    fontSize: normalize(13),
    fontFamily: 'Roboto-Medium',
  },

  card2:{
    backgroundColor:'white',
    width:w*0.85,
    borderRadius:15,
    marginTop:w*0.04,
    shadowColor: "black",
        shadowOffset: {
            width: w*0.1,
            height: 6,
        },
        shadowOpacity: 0.07,
        shadowRadius: 5.46,
        
        elevation: 5,
    
},
card3:{
    backgroundColor:'white',
    width:w*0.85,
    borderRadius:15,
    flexDirection:'row',
    height:w*0.17,
    marginTop:w*0.04,
    overflow:'hidden'
    
},
})