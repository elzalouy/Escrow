import React, { Component } from 'react'
import {StyleSheet,TextInput, View,Dimensions,Text, Image, TouchableOpacity,ScrollView,Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import normalize  from '../../utils/normalize';
import LinearGradient from 'react-native-linear-gradient';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

const content2 = [
    {
      title: 'Income',
      image:'aquatics',
      content: "Emaar Egypt",
      deadline:'March',
      price:'721.00'
    },
    {
      title: 'Income',
      image:'user',
      content: "O-Projects",
      deadline:'February',
      price:'361.00'
    },
 

  ];


export default class Wallet extends Component {
    constructor(){
        super();
        this.state = {
            animatedHeight:new Animated.Value(0),
            animatedHeight2:new Animated.Value(0),
            show2:false
        }
    }

    animateHeight = () =>{
        if(this.state.animatedHeight._value==(0)){
        Animated.timing(
        this.state.animatedHeight,
        {
        toValue: w*0.5,
        duration: 350,
        }
        ).start();
        }
        else if(this.state.animatedHeight._value==(w*0.5)){
        Animated.timing(
        this.state.animatedHeight,
        {
        toValue: 0,
        duration: 350,
        }
        ).start(()=>{
      //   this.extendRecent();
        });
        }
        }


        animateHeight2 = () =>{
            if(this.state.animatedHeight2._value==(0)){
                this.setState({show2:true})
            Animated.timing(
            this.state.animatedHeight2,
            {
            toValue: w*0.5,
            duration: 350,
            }
            ).start();
            }
            else if(this.state.animatedHeight2._value==(w*0.5)){

            Animated.timing(
            this.state.animatedHeight2,
            {
            toValue: 0,
            duration: 350,
            }
            ).start(()=>{
                this.setState({show2:false})
          //   this.extendRecent();
            });
            }
            
            }
        
        
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>    
            <View style={styles.view1}>
                <View style={{margin:w*0.05,marginBottom:w*0.02,flexDirection:'row',alignItems:'center',overflow:'hidden'}}>
                    <View>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} activeOpacity={0.3} onPress={()=>{this.animateHeight();}}>
                <Text style={styles.txt4}>Work package value</Text>
                <Icon style={{marginLeft:w*0.01}}
                name='keyboard-arrow-down' size={normalize(20)} color="#9DA2C9"/> 
                </TouchableOpacity>
                <Text style={styles.txt5}>$850.00</Text>
                <Animated.View style={[styles.subview1,{height:this.state.animatedHeight}]}>

                {content2.map((item,index) =>{
            return(
               <View key={item.title} style={index==content2.length-1?[styles.card2,{marginBottom:w*0.07}]:index==0?[styles.card2,{marginTop:w*0.05}]:styles.card2}>
               <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
               <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06}}
               resizeMode='contain'
                source={{uri:item.image}}/>
                </View>
                   <View  style={{flex:4,justifyContent:'center'}}>
                       <Text style={styles.txt6}>{item.title}</Text>                  
                       <Text style={styles.txt7}>{item.content}</Text>
                       
                   </View>
                   <View style={{flex:2,alignItems:'center',justifyContent:'center',marginRight:w*0.02}}>
                   <Text style={[styles.txt4,{fontFamily:'Roboto-Bold'}]}>${item.price}</Text>
                   <Text style={styles.txt7}>{item.deadline}</Text>

                       </View>
           </View>
            )})}
            </Animated.View>
                {/* <Text style={styles.txt1}>All Work Packages*</Text> */}
                </View>

                </View>
                <View style={styles.line}/>
                <View style={{margin:w*0.05,marginBottom:w*0.02,flexDirection:'row',alignItems:'center',overflow:'hidden'}}>
                    <View>
                        <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} activeOpacity={0.3} onPress={()=>{this.animateHeight2();}}>
                <Text style={styles.txt4}>Wallet Ballance</Text>
                <Icon style={{marginLeft:w*0.01}}
                name='keyboard-arrow-down' size={normalize(20)} color="#9DA2C9"/> 
                </TouchableOpacity>
                <Text style={[styles.txt5,{marginBottom:w*0.02}]}>$250.00</Text>
                <Animated.View style={[styles.subview1,{height:this.state.animatedHeight2}]}>
                    {this.state.show2?
                    <View>
                    <View style={styles.header}>
                    <Image style={styles.headerimg}
               resizeMode='contain'
                source={{uri:'aquatics'}}/>
                    <Text style={[styles.txt1,{marginLeft:w*0.02,}]}>Aquatics</Text>

                    </View>

                <View style={[styles.card,{marginTop:w*0.02,width:w*0.8}]}>
                    <View  style={styles.indicator}/>
                    <Image style={[styles.headerimg,{marginLeft:w*0.015}]}
               resizeMode='contain'
                source={{uri:'flag'}}/>
                    <View style={{marginVertical:w*0.06,marginLeft:w*0.02}}>
                    <Text style={styles.txt3}>Milestone 1</Text>
                    <Text style={styles.txt1}>Creating Schema</Text>
                    </View>
                    <Text style={[styles.txt4,{fontFamily:'Roboto-Bold',marginLeft:'auto',marginRight:w*0.02}]}>$721.00</Text>
                </View>
                {/* <View style={styles.line2}/> */}

                <View style={[styles.card,{marginTop:w*0.02,width:w*0.8}]}>
                    <View  style={styles.indicator}/>
                    <Image style={[styles.headerimg,{marginLeft:w*0.015}]}
               resizeMode='contain'
                source={{uri:'flag'}}/>
                    <View style={{marginVertical:w*0.06,marginLeft:w*0.02}}>
                    <Text style={styles.txt3}>Milestone 2</Text>
                    <Text style={styles.txt1}>Creating Schema</Text>
                    </View>
                    <Text style={[styles.txt4,{fontFamily:'Roboto-Bold',marginLeft:'auto',marginRight:w*0.02}]}>$721.00</Text>
                </View>
                </View>
                :null}
                 {/* <View style={styles.line2}/> */}
</Animated.View>
                {/* <Text style={styles.txt1}>All Work Packages*</Text> */}
                </View>

                </View>
                </View>




                <View style={[styles.packagesContainer,{marginBottom:w*0.2}]}>
           
                <Text style={[styles.txt4,{marginTop:w*0.05,marginLeft:w*0.04}]}>Latest Transactions</Text>

           {content2.map((item,index) =>{
            return(
               <TouchableOpacity key={item.title} style={index==content2.length-1?[styles.card,{marginBottom:w*0.07}]:index==0?[styles.card,{marginTop:w*0.05}]:styles.card} onPress={()=>this.props.navigation.navigate('Reciept')}>
               <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
               <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06,marginVertical:w*0.04}}
               resizeMode='contain'
                source={{uri:item.image}}/>
                </View>
                   <View  style={{flex:4,justifyContent:'center'}}>
                       <Text style={styles.txt6}>{item.title}</Text>                  
                       <Text style={styles.txt7}>{item.content}</Text>
                       
                   </View>
                   <View style={{flex:2,alignItems:'center',justifyContent:'center',}}>
                   <Text style={[styles.txt4,{fontFamily:'Roboto-Bold'}]}>${item.price}</Text>
                   <Text style={styles.txt7}>{item.deadline}</Text>

                       </View>
           </TouchableOpacity>
            )})}
        <TouchableOpacity style={{ marginRight:w*0.07, marginBottom:w*0.1,}}onPress={()=>this.props.navigation.navigate('LastTransactions')}>
        <Text style={styles.txt8}>Check More</Text>
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
    view1:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.12

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
    line:{
        height:2,
        backgroundColor:'#E8EBFD',
        width:w*0.8,
        alignSelf:'center',
        marginTop:w*0.01
    },
    txt6:{
        fontSize:normalize(13),
        color:'#002364',
        fontFamily:'Roboto',
    },
    packagesContainer:{
        marginTop:20,
        // height:320,
        width:w*0.9,
        borderRadius:20,
        backgroundColor:"#fff",
        overflow:'hidden'
        
    },
    card:{
        backgroundColor:'white',
        width:w*0.85,
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        // height:w*0.17,
        marginTop:w*0.04,
        shadowColor: "black",
        shadowOffset: {
            width: w*0.01,
            height: 2,
        },
        shadowOpacity: 0.07,
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
    txt7:{
        fontSize:normalize(11),
        color:'#9DA2C9',
        fontFamily:'Roboto',
    },
    txt8:{
        textDecorationLine:'underline',
        color:'#7889FF',
        alignSelf:'flex-end',
    
    },
    card2:{
        backgroundColor:'white',
        width:w*0.8,
        borderBottomRightRadius:15,
        flexDirection:'row',
        alignItems:'center',
        height:w*0.17,
        marginTop:w*0.08,
        shadowColor: "black",
        shadowOffset: {
            width: w*0.1,
            height: 6,
        },
        shadowOpacity: 0.07,
        shadowRadius: 5.46,
        
        elevation: 5,
    },
    indicator:{
        backgroundColor:'#4AFCFE',
        width:w*0.05,
        height:w*0.05,
        borderRadius:w*0.025
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
    txt1:{
        fontSize:normalize(12),
        color:'#9DA2C9',
        fontFamily:'Roboto',
    },
    header:{
        flexDirection:'row',
        alignItems:'center'
    },
    headerimg:{
        width:w*0.09,
        height:w*0.09,
        borderRadius:w*0.045,
    }
});