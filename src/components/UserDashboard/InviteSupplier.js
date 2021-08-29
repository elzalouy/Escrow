import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import { Input } from 'react-native-elements';
import normalize  from '../../utils/normalize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class InviteSupplier extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
        }
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={[styles.view1,{marginTop:w*0.1,flexDirection:'row'}]}>
                <View style={{flex:4}}>
                <Text style={[styles.txt1,{marginLeft:w*0.02}]}>Invite Supplier</Text>
                <Input
              containerStyle={styles.input}
              placeholder='Supplier Username'
              placeholderTextColor="#9DA2C9" 
              keyboardType='numeric'
              inputStyle={styles.inputText}
              inputContainerStyle={{borderBottomWidth: 0}}
              onChangeText={(text) => this.setState({name:text})}
              value={this.state.name}
              
              leftIconContainerStyle={{marginLeft:7,marginRight:8}}
              />
                </View>
                <View style={{flex:1}}>
                <Image source={{ uri: 'qrcode' }} style={styles.img} resizeMode="contain" />
                </View>
                </View>

                <Text style={styles.txt2}>Suggestions</Text>
                <View style={[styles.view1,{marginTop:w*0.02,padding:0}]}>
                <TouchableOpacity style={styles.chosenCard} onPress={()=>this.props.navigation.navigate('UserDepositFund')}>
                    <View style={styles.imageContainer}>
                    <Image source={{ uri: 'user' }} style={styles.img2} resizeMode="contain" />

                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.txt1}>Buffay Bing</Text>
                    <Text style={styles.inputText}>Mobile App Developer</Text>

                    </View>
                </TouchableOpacity>
                <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: 'user' }} style={styles.img2} resizeMode="contain" />

                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.txt1}>Bashar</Text>
                    <Text style={styles.inputText}>In4ma</Text>

                    </View>
                </View>
                <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: 'user' }} style={styles.img2} resizeMode="contain" />

                    </View>
                    <View style={styles.textContainer}>
                    <Text style={styles.txt1}>Basma</Text>
                    <Text style={styles.inputText}>Emaar Misr</Text>

                    </View>
                </View>
                </View>


            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F8FF',
    },
    view1:{
        width:w*0.9,
        padding:w*0.05,
        borderRadius:15,
        backgroundColor:'white',
    },
    txt1: {
        color: '#7889FF',
        fontSize: normalize(15),
        fontFamily: 'Roboto',
        
    },
    input:{
        borderBottomColor:'#7889FF',
        borderBottomWidth:1,
        width:w*0.63,
        alignItems:'flex-start',
        height:w*0.1,
        marginTop:w*0.03,
    },
    inputText:{
        // color:'#9DA2C9'
        fontSize:normalize(11),
        fontFamily:'Roboto',
        color:'#9DA2C9'

    },
    img:{
        width:w*0.18,
        height:w*0.18,
        marginTop:w*0.02
    },
    txt2: {
        color: '#9DA2C9',
        fontSize: normalize(12),
        fontFamily: 'Roboto',
        alignSelf:'flex-start',
        marginLeft:w*0.07,
        marginTop:w*0.18
    },
    chosenCard:{
        backgroundColor:'#E8EBFD',
        borderColor:'#7889FF',
        borderRadius:15,
        borderWidth:1,
        flexDirection:'row'
    },
    card:{
        flexDirection:'row',
        marginTop:w*0.04
    },
    imageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:w*0.02
    },
    textContainer:{
        flex:3,
        alignItems:'flex-start',
        paddingVertical:w*0.03,
        justifyContent:'space-between'
    },
    img2:{
        width:w*0.14,
        height:w*0.14,
        borderRadius:w*0.07
        // marginTop:w*0.02
    },
})