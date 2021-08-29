import React, { Component } from 'react'
import { Text, View, StyleSheet,Dimensions,TouchableOpacity, Image,ScrollView } from 'react-native'
import normalize from '../../utils/normalize';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class Milestones extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>   

                <View style={[styles.view2,{alignItems:'center'}]}>
                <Text style={styles.txt4}>Escrowbchain App Development</Text>
                <Image style={{width:w*0.14,height:w*0.14, borderRadius:w*0.07,marginTop:w*0.02}}
                            resizeMode='contain'
                             source={{uri:'user'}}/>
                <Text style={[styles.txt2,{marginTop:w*0.02}]}>Supplier: Buffay Bing</Text>

                </View>


                    <View style={styles.view1}>

                <View style={{margin:w*0.05,marginBottom:w*0.02,flexDirection:'row',alignItems:'center'}}>
                    <View>
                <Text style={styles.txt4}>Wallet Ballance</Text>
                <Text style={styles.txt5}>$1250.00</Text>
                </View>
                <TouchableOpacity 
                onPress={()=>this.props.navigation.navigate('Wallet')}
                >
                <Image source={{uri: 'wallet2'}} style={[styles.img5,{marginLeft:w*0.2}]} resizeMode="contain"/>
                </TouchableOpacity>

                </View>
                </View>

          

                <View style={[styles.view3,{marginBottom:w*0.2}]}>
          
                    <View style={{flexDirection:'row',width:w*0.8,alignItems:'center', marginTop:w*0.04}}>
                    <Text style={[styles.txt,{marginLeft:w*0.05}]}>Milestones</Text>
                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('ControlMilestones')}>
                    <Text style={styles.txt3}>Control</Text>
                    </TouchableOpacity>
                    
                  
            </View>

            <View style={styles.card} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <View  style={styles.indicator}/>

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



                <View style={styles.card} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <View  style={styles.indicator}/>

                <Image source={{uri: 'flag2'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={styles.txt21}>Milestone 2</Text>
                <Text style={styles.txt22}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={styles.txt23}>$501.00</Text>

                </View>
                </View>



                


                <View style={styles.card} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <View  style={[styles.indicator,{backgroundColor:'#9F2D47'}]}/>

                <Image source={{uri: 'flag'}} style={styles.img3} resizeMode="cover"/>
                </View>
                <View style={{flex:4}}>
                <Text style={[styles.txt21,{color:'#9F2D47'}]}>Milestone 2</Text>
                <Text style={styles.txt22}>Creating Scheme</Text>

                </View>
                <View style={{flex:2,alignItems:'center'}}>
                
                <Text style={[styles.txt23,{opacity:1}]}>$501.00</Text>

                </View>
                <TouchableOpacity style={styles.btn2}>
                    <Text style={styles.txt3}>Disputed</Text>
                </TouchableOpacity>
                </View>


                <View style={[styles.card,{marginBottom:w*0.15}]} >
                <View style={{flex:2,justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                <View  style={[styles.indicator,{borderWidth:1,borderColor:'#4AFCFE',backgroundColor:'white'}]}/>

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

                <TouchableOpacity style={styles.btn3} onPress={()=>this.props.navigation.navigate('DisputeDocuments')}>
                    <Text style={styles.txt3}>Start Dispute</Text>
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
        marginTop:w*0.05

    },
    view2:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.12,
        padding:w*0.03
    },
    view3:{
        backgroundColor:'white',
        borderRadius:15,
        width:w*0.9,
        marginTop:w*0.06,
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
    txt:{
        color:'#7889FF',
        fontFamily:'Roboto',
        fontSize:normalize(15),
    },
    indicator:{
        backgroundColor:'#4AFCFE',
        width:w*0.05,
        height:w*0.05,
        borderRadius:w*0.025
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
    btn3:{
        // paddingHorizontal:w*0.04,
        paddingVertical:w*0.01,
        backgroundColor:'#7889FF',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9F2D47',
        width:w*0.5,
        marginLeft:'auto',
        marginBottom:w*0.05,
        marginRight:w*0.05
    },
})