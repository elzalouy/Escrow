import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Dimensions, StyleSheet, Animated,FlatList, TouchableOpacity,TextInput } from 'react-native'
import  normalize  from '../../utils/normalize';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

const content = [
    {
        title: 'Froneri',
        image: 'froneri',
        content: "Web Development",
        requirements: ['Start by taking the 4 raspberries', 'Chop them into tiny segments', 'Introduce the Start']
    },
    {
        title: 'Mazera',
        image: 'aquatics',
        content: "App Development",
        requirements: ['Start by taking the 4 raspberries', 'Chop them into tiny segments', 'Introduce the Start']
    },
    {
        title: 'Aquatics',
        image: 'aquatics',
        content: "Web Development",
        requirements: ['Start by taking the 4 raspberries', 'Chop them into tiny segments', 'Introduce the Start']
    },

];

export default class WorkInvitations extends Component {
    constructor() {
        super();
        this.state = {
            animatedHeight: new Animated.Value(0),
            show: false,
            animations: []
        }
    }
    componentDidMount() {
        let x = []
        for (var i = 0; i < content.length; i++) {
            x.push(new Animated.Value(0))
        }
        this.setState({ animations: x })
    }

    animate = (i) => {

        if (this.state.animations[i]._value == 0) {
            Animated.timing(
                this.state.animations[i],
                {
                    toValue: w * 0.42,
                    duration: 350,
                }
            ).start();
        }
        else if (this.state.animations[i]._value == (w * 0.42)) {
            Animated.timing(
                this.state.animations[i],
                {
                    toValue: 0,
                    duration: 350,
                }
            ).start(() => {
                // this.extend(i);
            });
        }

    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
                <Modal isVisible={this.state.show}
                    swipeDirection='down'
                    onSwipeComplete={() => this.setState({ show: false })}
                    onBackdropPress={() => this.setState({ show: false })}
                    scrollOffset={h*0.2}
                    style={{marginTop:Platform.OS === 'ios'?h*0.3:h*0.265,width:w*0.8,height:w*0.8,marginLeft:w*0.1,marginBottom:h*0.3,backgroundColor:'white'}}
                >
                    <View>
                        <Text style={{marginLeft:w*0.05}}>Send Comment to Buyer</Text>
                        <TextInput
                      placeholder="Comment"
                      placeholderTextColor="#97ABBF"
                      selectionColor="#7a85ff"
                      textAlignVertical="bottom"
                      style={styles.textInputStyle}     
                      />
                                        <View style={styles.buttonContainer}>
                  <LinearGradient colors={['#6EB4FF','#7889FF']} style={{borderRadius:15,elevation:2, height:w*0.13, width:w*0.7,marginTop:w*0.08}}
                  start={{ x: 0.7, y: 0 }}>
                      <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.setState({show:false})}>
                          <Text style={{color:'#fff', textAlign:'center', fontSize:17, fontWeight:'bold'}}>Send</Text>
                      </TouchableOpacity>
                  </LinearGradient>
                  </View>
                    </View>
                </Modal>
                <Image source={{ uri: 'oprojects' }} style={styles.img} resizeMode="cover" />
                <Text style={styles.name}> Oprojects </Text>

                <View style={{ width: w * 0.9, marginTop: w * 0.05, marginTop: w * 0.1 }}>
                    <Text style={styles.txt}>Intvitations From </Text>
                    <FlatList
                        // style={styles.searchContainer}
                        data={content}
                        // numColumns={3}
                        scrollEnabled={true}
                        renderItem={({ item, index }) =>
                            <View style={styles.card}>
                                <View style={{ marginVertical: w * 0.03, marginHorizontal: w * 0.05, flexDirection: 'row' }}>

                                    <View style={styles.subContainer}>
                                        <View style={{ flexDirection: 'column', flex: 1, }}>
                                            <View style={{
                                                flex: 3, flexDirection:
                                                    "row"
                                            }}>
                                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', }}>
                                                    <Image source={{ uri: item.image }} style={styles.img2} resizeMode="contain" />

                                                </View>
                                                <View style={{ justifyContent: 'flex-start', flex: 3 }}>
                                                    <Text style={styles.txt2}>{item.title}</Text>
                                                    <Text style={[styles.txt, { marginTop: w * 0.008 }]}>{item.content}</Text>

                                                </View>
                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.3} onPress={() => { this.animate(index); }}>
                                                    <Text style={styles.txt1}>Details</Text>
                                                    <Icon style={{ marginLeft: w * 0.01 }}
                                                        name='keyboard-arrow-down' size={normalize(18)} color="#7889FF" />
                                                </TouchableOpacity>
                                            </View>


                                        </View>


                                    </View>

                                    <View style={styles.btnContainer}>
                                        <TouchableOpacity style={styles.confirm}>
                                            <Text style={styles.confirmtxt}>Confirm</Text>

                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.deny} onPress={()=>this.setState({show:true})}>
                                            <Text style={styles.denytxt}>Deny</Text>

                                        </TouchableOpacity>
                                    </View>

                                </View>

                                <Animated.View style={{ height: this.state.animations[index] }} >
                                    <View style={styles.subview1}
                                        // onLayout={(event) => {
                                        //     var { x, y, width, height } = event.nativeEvent.layout;
                                        //     alert(height)
                                        // }}
                                    >
                                        <View style={styles.line} />

                                        <FlatList
                                            // style={styles.searchContainer}
                                            data={content[index].requirements}
                                            // numColumns={3}
                                            scrollEnabled={false}
                                            renderItem={({ item, index }) =>
                                                <View style={styles.card2}>
                                                    <View style={styles.indicator} />
                                                    <Text style={styles.txt4}>{item}</Text>
                                                </View>
                                            }
                                        />
                                        <TouchableOpacity activeOpacity={0.2}>
                                            <Text style={styles.txt5}>Check More</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Animated.View>

                            </View>

                        }
                    />

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
    img: {
        width: w * 0.16,
        height: w * 0.16,
        borderRadius: w * 0.08,
        marginTop: w * 0.12,
        marginBottom: w * 0.03
    },
    name: {
        color: '#002364',
        fontSize: normalize(19),
        fontFamily: 'Roboto-Medium'
    },
    txt: {
        fontSize: normalize(11),
        color: '#9DA2C9',
        fontFamily: 'Roboto',
    },
    card: {
        width: w * 0.9,
        borderRadius: 20,
        marginTop: w * 0.03,
        overflow: 'hidden',
        backgroundColor:'white'
    },
    subContainer: {
        flex: 3,
    },
    btnContainer: {
        flex: 1,
    },
    confirm: {
        backgroundColor: '#A3FDFE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    deny: {
        backgroundColor: '#7889FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: w * 0.03

    },
    confirmtxt: {
        fontSize: normalize(11),
        color: '#7889FF',
        fontFamily: 'Roboto-Bold',
        marginVertical: w * 0.02
    },
    denytxt: {
        fontSize: normalize(11),
        color: '#E8EBFD',
        fontFamily: 'Roboto-Bold',
        marginVertical: w * 0.02,
    },
    btn: {
        marginTop: 'auto'
    },
    txt1: {
        fontSize: normalize(11),
        color: '#7889FF',
        fontFamily: 'Roboto',
    },
    img2: {
        width: w * 0.1,
        height: w * 0.1,
        borderRadius: w * 0.05,
        // marginTop: w * 0.12,
        // marginBottom: w * 0.03
    },
    txt2: {
        fontSize: normalize(13),
        color: '#002364',
        fontFamily: 'Roboto',
    },
    line: {
        height: 2,
        backgroundColor: '#E8EBFD',
        width: w * 0.8,
        alignSelf: 'center',
        marginTop: w * 0.01
    },
    txt3: {
        color: '#9DA2C9',
        fontSize: normalize(12),
        fontFamily: 'Roboto-Bold',
        marginTop: w * 0.04
    },
    indicator: {
        backgroundColor: '#7889FF',
        width: w * 0.02,
        height: w * 0.02,
        borderRadius: w * 0.01,
    },
    card2: {
        flexDirection: 'row',
        marginTop: w * 0.02,
        alignItems: 'center'
    },
    txt4: {
        color: '#9DA2C9',
        fontSize: normalize(11),
        fontFamily: 'Roboto',
        marginLeft: w * 0.02
    },
    txt5: {
        color: '#7889FF',
        fontSize: normalize(11),
        fontFamily: 'Roboto',
        textDecorationLine: 'underline',
        marginTop:w*0.03,
    },
    subview1:{
        width:w*0.8,
        alignSelf:'center'
    },
    textInputStyle: {
        alignSelf:'center',
        height: 60, 
        width:w -100,
        backgroundColor:'#f1f8ff',
        borderBottomWidth:1,
        borderBottomColor:"#7889FF",
        color:'black',
      },
    buttonContainer:{
        // flex:1,
        flexDirection:'column',
        alignContent:'flex-start',
        justifyContent:'flex-start',
        alignSelf:'center',
        marginTop:w*0.04
       
    },
    buttonStyle:{
      height:w*0.13, 
      width:w*0.7,
      justifyContent:'center',
      alignContent:'center'
    },
});