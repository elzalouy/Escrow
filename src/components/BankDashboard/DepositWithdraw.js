import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, Platform } from 'react-native'
import  normalize from '../../utils/normalize';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';


const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class DepositWithdraw extends Component {
    constructor(){
    
        super();
    
        this.state = {
          show: false,
         
    
        }
      }
    render() {
        return (
            <View style={styles.container}>
        
                <TouchableOpacity onPress={()=>{this.setState({show:true})}} style={[styles.card,{marginTop:w*0.18}]}>
                    <View style={styles.view1}>
                    <Image source={{uri: 'deposit'}} style={styles.img} resizeMode="contain"/>
                    <Text style={styles.txt}>Deposit Fund</Text>
                    </View>
                    <View style={styles.view2}>
                    <LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}
                // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                >
                 
                                    <Icon
                                    // style={{marginRight:w*0.03}}
                                    name='keyboard-arrow-right'
                                    size={normalize(30)}
                                    color="white"
                                    /> 
                </LinearGradient>
                    </View>
               
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.setState({show:true})}} style={styles.card}>
                <View style={styles.view1}>
                <Image source={{uri: 'withdraw'}} style={styles.img} resizeMode="contain"/>
                    <Text style={styles.txt}>Withdraw Fund</Text>

</View>
<View style={styles.view2}>
<LinearGradient colors={['#6EB4FF', '#7889FF']} style={styles.linearGradient}
// start={{x: 0, y: 0}} end={{x: 1, y: 0}}
>

                <Icon
                // style={{marginRight:w*0.03}}
                name='keyboard-arrow-right'
                size={normalize(30)}
                color="white"
                /> 
</LinearGradient>
</View>
                </TouchableOpacity>
                <View >
      <Modal isVisible={this.state.show}
       swipeDirection='down' 
       onSwipeComplete={() => this.setState({ show: false })}
       onBackdropPress={() => this.setState({ show: false })}
       scrollOffset={h*0.2}
       style={{marginTop:Platform.OS === 'ios'?h*0.3:h*0.265,width:w*0.8,height:w*0.8,marginLeft:w*0.1,marginBottom:h*0.3,}}
       >
           <TouchableOpacity  onPress={()=>{this.setState({ show: false });this.props.navigation.navigate('WorkPackage')}}>
        <Image source={{uri: 'qrcode'}} style={styles.qrcode} resizeMode="contain"/>
        </TouchableOpacity>
      </Modal>
    </View>
            </View>
        )
    }
}

const styles=   StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:'#F2F8FF',
      alignItems:'center'
    },
    card:{
        backgroundColor:'white',
        width:w*0.9,
        height:w*0.3,
        borderRadius:w*0.1,
        marginTop:w*0.05,
        flexDirection:'row'
    },
    linearGradient:{
        width:w*0.1,
        height:w*0.1,
        borderRadius:w*0.05,
        justifyContent:'center',
        alignItems:'center'
    },
    view1:{
        flex:4,
        alignItems:'center',
        flexDirection:'row'
    },
    view2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:w*0.2,
        height:w*0.2,
        marginLeft:w*0.05
    },
    txt:{
        fontSize:normalize(14),
        color:'#7889FF',
        fontFamily:'Roboto-Medium',
        marginLeft:w*0.02
    },
    qrcode:{
        width:w*0.8,
        height:w*0.8,
    }
});