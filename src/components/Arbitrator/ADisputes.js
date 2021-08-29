import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Image,  } from 'react-native'
import normalize  from '../../utils/normalize';
import { TouchableOpacity } from 'react-native-gesture-handler';


const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class ADisputes extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
                <Text style={styles.from}> Disputes from </Text>

                <View style={styles.view1}>
                <View style={[styles.card,{marginTop:w*0.05}]}>
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
                <Text style={[styles.txt2,{fontSize:normalize(11),marginTop:w*0.01}]}>6th June</Text>
                </View>
                </View>
                </View>

                <View style={{flexDirection:'row',marginLeft:w*0.05,marginTop:w*0.04,alignItems:'center'}}>
                <Image source={{uri: 'oprojects'}} style={styles.img4} resizeMode="cover"/>
                <Text style={styles.txt1}>Supplier Complained on Milestone 2</Text>
                </View>
                
                <View style={{flexDirection:'row',marginTop:w*0.02,marginBottom:w*0.05,marginLeft:w*0.05}}>
                <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={()=> this.props.navigation.navigate('AWorkPackage')}>
                    <Text style={styles.txt4}>Go To Work Package</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn,{marginLeft:w*0.05}]} activeOpacity={0.5} onPress={()=> this.props.navigation.navigate('AStatement')}>
                    <Text style={styles.txt4}>Statements</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} activeOpacity={0.5}
                onPress={()=> this.props.navigation.navigate('AControl')}
                >
                <Text style={styles.txt4}>Control</Text>
                </TouchableOpacity>
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
    from:{
        color:'#9DA2C9',
        fontFamily:'Roboto',
        fontSize:normalize(11),
        alignSelf:'flex-start',
        marginLeft:w*0.05,
        marginTop:w*0.1
    },
    view1:{
        backgroundColor:'white',
        width:w*0.9,
        borderRadius:15,
        marginTop:w*0.02
    },
    card:{
        width:w*0.8,
        height:w*0.2,
        alignItems:'center',
        flexDirection:'row',
        marginLeft:w*0.05
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
    },
    img4:{
        width:w*0.06,
        height:w*0.06,
        borderRadius:w*0.03
    },
    txt1:{
        color:'#9F2D47',
        fontSize:normalize(11),
        fontFamily:'Roboto-Medium',
        marginLeft:w*0.02
    },
    txt2:{
        fontSize:normalize(9),
        color:'#9DA2C9',
        fontFamily:'Roboto',
    },
    txt3:{
        fontSize:normalize(11),
        color:'#002364',
        fontFamily:'Roboto',
        marginTop:w*0.01
    },
    txt4:{
        color:'white',
        fontFamily:'Roboto',
        fontSize:normalize(10),
        margin:w*0.02
    },
    btn:{
        borderRadius:15,
        backgroundColor:'#7889FF'
    },
    btn2:{
        borderRadius:15,
        backgroundColor:'#9F2D47',
        marginLeft:w*0.05
    }
})
