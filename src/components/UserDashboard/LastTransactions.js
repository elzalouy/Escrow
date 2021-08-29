import React, { Component } from 'react'
import { Text, View, Dimensions, Image, TouchableOpacity,ScrollView, StyleSheet } from 'react-native'
import  normalize  from '../../utils/normalize';
const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

const content2 = [
    {
      title: 'Cash Deposit',
      image:'aquatics',
      content: "Emaar Egypt",
      deadline:'March',
      price:'721.00'
    },
    {
      title: 'Refund',
      image:'oprojects',
      content: "O-Projects",
      deadline:'February',
      price:'361.00'
    },
    {
        title: 'Income',
        image:'oprojects',
        content: "O-Projects",
        deadline:'February',
        price:'361.00'
    },
    {
        title: 'Benficial Withdraw',
        image:'oprojects',
        content: "O-Projects",
        deadline:'February',
        price:'361.00'
    },
    {
        title: 'Refund',
        image:'oprojects',
        content: "O-Projects",
        deadline:'February',
        price:'361.00'
    },

  ];


export default class LastTransactions extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>    
 <View style={[styles.packagesContainer,{marginBottom:w*0.2}]}>
           
           <Text style={[styles.txt4,{marginTop:w*0.05,marginLeft:w*0.04}]}>Latest Transactions</Text>

      {content2.map((item,index) =>{
       return(
          <TouchableOpacity key={item.title} style={index==content2.length-1?[styles.card,{marginBottom:w*0.07}]:index==0?[styles.card,{marginTop:w*0.05}]:styles.card} onPress={()=>this.props.navigation.navigate('Reciept')}>
          <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:w*0.12,height:w*0.12, borderRadius:w*0.06}}
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
    packagesContainer:{
        marginTop:w*0.1,
        // height:320,
        width:w*0.9,
        borderRadius:20,
        backgroundColor:"#fff",
        overflow:'hidden'
        
    },
    txt4:{
        fontSize:normalize(15),
        color:'#7889FF',
        fontFamily:'Roboto',
    },
    txt6:{
        fontSize:normalize(13),
        color:'#002364',
        fontFamily:'Roboto',
    },
    card:{
        backgroundColor:'white',
        width:w*0.85,
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
});