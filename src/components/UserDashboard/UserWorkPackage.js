import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, Image,TouchableOpacity, TextInput, Share } from 'react-native'
import normalize  from '../../utils/normalize';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {  Input, } from 'react-native-elements';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class UserWorkPackage extends Component {
    constructor(){
        super();
        this.state = {
            waiting:0,
        }
    }
    componentDidMount(){
        // alert("2")
        if(this.props.route.params!== undefined){
            // alert(this.props.route.params.waitingForConfirmation)
        this.setState({waiting:this.props.route.params.waitingForConfirmation})
        }
    }

    onShare = async () => {
        try {
          const result = await Share.share({
            message:
            'Invitation URL',
        });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          console.log(error.message);
        }
      };
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={[styles.view1,{marginTop:w*0.12}]}>
                   <Text style={styles.txt1}>Escrowbchain App Development</Text>
                   <View style={styles.view2}>
                   <View style={styles.view3}>
                   <Image source={{ uri: 'oprojects' }} style={[styles.img,{borderRadius:w*0.045}]} resizeMode="contain" />
                   <Text style={styles.txt2}>…………</Text>
                   </View>
                   <View style={styles.view3}>
                   <Image source={{ uri: 'bag' }} style={styles.img} resizeMode="contain" />
                   <Text style={styles.txt2}>Technical</Text>
                   <Text style={styles.txt2}>Short Description</Text>
                   </View>
                   </View>
                   <View style={styles.line}/>
                   <View style={styles.view2}>
                   <View style={styles.view3}>
                   <Image source={{ uri: 'wallet' }} style={styles.img} resizeMode="contain" />
                   <Text style={styles.txt2}>Work Package Value</Text>
                   <Text style={styles.txt2}>$1,400</Text>
                   </View>
                   <View style={styles.view3}>
                   <Image source={{ uri: 'calendar' }} style={styles.img} resizeMode="contain" />
                   <Text style={styles.txt2}>Date</Text>
                   <Text style={styles.txt2}>12/3/2020</Text>
                   </View>
                   </View>
                   
                </View>

                <View style={styles.view1}>
                <Text style={styles.txt1}>Available Balance (paid by Buyer)</Text>
                <View style={styles.view4}>
                <Text style={styles.txt3}>$1,250.00</Text>
                <Image source={{ uri: 'wallet2' }} style={styles.img2} resizeMode="contain" />
                </View>

                </View>

                {this.state.waiting==1?
                <View style={styles.view1}>
                <Text style={styles.txt1}>Please wait for confirmation</Text>
               
           
                 {/* <TextInput
      style={styles.input}
      placeholder='Awaiting Supplier Approval…'
      placeholderTextColor='#9DA2C9'
      onChangeText={(text) => this.setState({name:text})}
      value={this.state.name}
    /> */}

    <TouchableOpacity style={styles.input} onPress={()=>this.props.navigation.navigate('NewWorkPackage')}>
        <Text style={styles.inputText}>Awaiting Supplier Approval…</Text>

    </TouchableOpacity>
                </View>
                :this.state.waiting==2?
                <View style={styles.view1}>
                <Text style={styles.txt1}>Description</Text>
                <Text style={[styles.txt2,{marginTop:w*0.03,marginBottom:w*0.05}]}>Start by taking the 4 raspberries, chop them into tiny segments and introduce the 
Start by taking the 4 raspberries, chop them into tiny segments and introduce the 

</Text>
                </View>

                :
                <View style={[styles.view1,{paddingHorizontal:w*0.03,marginBottom:w*0.2}]}>
                <Text style={styles.txt4}>To Start Work Package…</Text>
                <View style={styles.view5}>
                    <View style={styles.row}>
                        <View style={styles.indicator}>
                        <Text style={styles.txt5}>1</Text>
                        </View>
                        <Image source={{ uri: 'invite' }} style={styles.img3} resizeMode="contain" />
                        <Text style={styles.txt6}>Invite Supplier</Text>
                        <TouchableOpacity style={styles.btn} onPress={()=>this.onShare()}>
                        <Text style={styles.txt7}>Invite</Text>
                        </TouchableOpacity>

                    </View>

                    <Text style={styles.txt8}>Then..</Text>

                    <View style={styles.row}>
                        <View style={styles.indicator}>
                        <Text style={styles.txt5}>2</Text>
                        </View>
                        <Image source={{ uri: 'deposit' }} style={styles.img3} resizeMode="contain" />
                        <Text style={styles.txt6}>Deposit Funds</Text>
                        <TouchableOpacity style={[styles.btn,{opacity:0.7}]}>
                            
                        <Text style={styles.txt7}>Deposit</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={[styles.row,{marginTop:w*0.14}]}>                      
                        <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}>
                        <TouchableOpacity style={[styles.btn,{marginLeft:0,backgroundColor:'transparent',flexDirection:'row',paddingVertical:w*0.02}]} onPress={()=>this.props.navigation.navigate('InviteSupplier')}>
                        <Text style={styles.txt7}>Start</Text>
                        <View style={styles.iconContainer}>
                        <Icon
                        name='keyboard-arrow-right' size={normalize(20)} color="#7889FF"/> 
                        </View>
                        </TouchableOpacity>
                        
                        </LinearGradient>
                    </View>

                </View>
                </View>
    }

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
        marginTop:w*0.05
    },
    txt1: {
        color: '#7889FF',
        fontSize: normalize(15),
        fontFamily: 'Roboto',
    },
    view2:{
        width:w*0.8,
        height:w*0.3,
        flexDirection:'row',
        alignItems:'center'
    },
    view3:{
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
    txt2:{
        color: '#9DA2C9',
        fontSize: normalize(13),
        fontFamily: 'Roboto',
        marginTop:w*0.01
    },
    img:{
        width:w*0.09,
        height:w*0.09
    },
    txt3:{
        color: '#002364',
        fontSize: normalize(32),
        fontFamily: 'Roboto',
        marginTop:w*0.02
    },
    view4:{
        flexDirection:'row',
        alignItems:'center'
    },
    img2:{
        width:w*0.11,
        height:w*0.11,
        borderRadius:w*0.055,
        marginLeft:'auto',
        marginRight:w*0.03
    },
    txt4:{
        color: '#002364',
        fontSize: normalize(18),
        fontFamily: 'Roboto-Bold',
    },
    view5:{
        marginTop:w*0.1
    },
    indicator:{
        backgroundColor:'#E8EBFD',
        width:w*0.06,
        height:w*0.06,
        borderRadius:w*0.03,
        justifyContent:'center',
        alignItems:'center'
    },
    txt5:{
        color: '#9DA2C9',
        fontSize: normalize(12),
        fontFamily: 'Roboto-Bold',
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        // marginBottom:w*0.05
    },
    img3:{
        width:w*0.13,
        height:w*0.13,
        borderRadius:w*0.065,
        marginLeft:w*0.04
    },
    txt6:{
        color: '#9DA2C9',
        fontSize: normalize(12),
        fontFamily:'Roboto-Medium',
        width:w*0.25,
        marginLeft:w*0.03
    },
    txt7:{
        color: '#F2F8FF',
        fontSize: normalize(12),
        fontFamily: 'Roboto-Medium',
    },
    btn:{
        backgroundColor:'#7889FF',
        paddingHorizontal:w*0.05,
        paddingVertical:w*0.027,
        borderRadius:18,
        width:w*0.25,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:w*0.05
    },
    linearGradient:
    {
        marginLeft:w*0.56,
        borderRadius:18,

    },
    iconContainer:{
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        width:w*0.06,
        height:w*0.06,
        borderRadius:w*0.03,
        marginLeft:w*0.02
    },
    txt8:{
        color: '#9DA2C9',
        fontSize: normalize(11),
        fontFamily: 'Roboto',
        marginLeft:w*0.1,
        marginBottom:w*0.02,
        marginTop:w*0.04,
    },
    input:{
        width:w*0.8,
        alignItems:'flex-start',
        justifyContent:'center',
        backgroundColor:'#E8EBFD',
        borderRadius:15,
        paddingLeft:w*0.02,
        marginTop:w*0.02
    },
    inputText:{
        fontSize:normalize(12),
        fontFamily:'Roboto',
        color:'#9DA2C9',
        marginVertical:w*0.03
    },
})