import React, { Component } from 'react'
import { Text, View, StyleSheet,Dimensions,TouchableOpacity, Image,ScrollView } from 'react-native'
import normalize  from '../../utils/normalize';
import { TouchableHighlight } from 'react-native-gesture-handler';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class ControlMilestones extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>   



                    <View style={styles.view1}>

                <View style={{margin:w*0.05,marginBottom:w*0.02,flexDirection:'row',alignItems:'center'}}>
                    <View>
                <Text style={styles.txt4}>Wallet Ballance</Text>
                <Text style={styles.txt5}>$1250.00</Text>
                </View>
                <TouchableOpacity 
                // onPress={()=>this.props.navigation.navigate('Wallet')}
                >
                <Image source={{uri: 'wallet2'}} style={[styles.img5,{marginLeft:w*0.2}]} resizeMode="contain"/>
                </TouchableOpacity>

                </View>
                </View>


                <View style={[styles.view3,{marginBottom:w*0.2}]}>
                    <View style={{flexDirection:'row',width:w*0.8,alignItems:'center', marginTop:w*0.04}}>
                    <Text style={[styles.txt,{marginLeft:w*0.05}]}>Milestones</Text>
                   
            </View>

            <View style={styles.card} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>

                <Image source={{uri: 'flag2'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt21}>Milestone 2</Text>
                <Text style={styles.txt22}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={styles.txt23}>$721.00</Text>

                </View>
                </View>



                <View style={[styles.card,{paddingBottom:w*0.18,height:'auto'}]} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>

                <Image source={{uri: 'flag'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt21}>Milestone 2</Text>
                <Text style={styles.txt22}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={styles.txt23}>$501.00</Text>

                </View>
                </View>



                


            


                <View style={[styles.card,{marginBottom:w*0.1,paddingBottom:w*0.18,height:'auto'}]} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>

                <Image source={{uri: 'flag'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt21}>Milestone 2</Text>
                <Text style={styles.txt22}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={[styles.txt23,{opacity:1}]}>$501.00</Text>

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
    txt1:{
        fontSize:normalize(9),
        color:'#9DA2C9',
        fontFamily:'Roboto',
        marginTop:w*0.01
    },
    txt2:{
        fontSize:normalize(11),
        color:'#9DA2C9',
        fontFamily:'Roboto',
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
        marginBottom:w*0.05
    },
    img5:{
        width:w*0.12,
        height:w*0.12,
        marginLeft:w*0.08
    },
    view1:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.15

    },
    view3:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.1,
        marginBottom:w*0.15,
    },
    img3:{
        width:w*0.09,
        height:w*0.09,
        borderRadius:w*0.045,
        marginLeft:w*0.02
        
    },
    txt21:{
        color:'#7889FF',
        fontSize:normalize(12),
        fontFamily:'Roboto'
    },
    txt22:{
        color:'#9DA2C9',
        fontSize:normalize(12),
        fontFamily:'Roboto',
        marginTop:w*0.01
    },
    txt23:{
        color:'#7889FF',
        fontFamily:'Roboto-Bold',
        fontSize:normalize(15),
        opacity:0.7
    },
    card:{
        width:w*0.84,
        height:w*0.18,
        borderRadius:15,
        marginTop:w*0.07,
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
    txt:{
        color:'#7889FF',
        fontFamily:'Roboto',
        fontSize:normalize(15),
    },
    btn:{
        paddingHorizontal:w*0.04,
        paddingVertical:w*0.01,
        backgroundColor:'#7889FF',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'auto',
    },
    txt3:{
        color:'#F2F8FF',
        fontFamily:'Roboto',
        fontSize:normalize(11),
    },
    btn2:{
        paddingHorizontal:w*0.04,
        paddingVertical:w*0.01,
        backgroundColor:'#7889FF',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:-w*0.02,
        right:-w*0.02,
        backgroundColor:'#9F2D47'
    },
})