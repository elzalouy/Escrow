import React, { Component } from 'react'
import { AsyncStorage, View, StyleSheet,ActivityIndicator,Dimensions } from 'react-native'
import {GiftedChat,Bubble,InputToolbar} from 'react-native-gifted-chat';
const w = (Dimensions.get('window').width);
const h = (Dimensions.get('window').height);

export default class RequestChange extends Component {
    messagesRef = null;//Also define a TAG variable, to display in console.log 
    statementsTAG = 'GiftedFireChat:';
    constructor() {
        super();
        this.state = {
            // messages: this.props.messages === null ? [] :this.props.messages,
            startAudio: false,
            messages: [],
            loading: true,
            uniRef: null,
            msg:'',
            user:{},
            chatId:''

        }
        // socket.on('message', this.onReceivedMessage);
        // socket.on('chatId', this.onReceivedChatId);
        // socket.on('messageSent', this.onReceivedMessageId);
        // this.determineUser();
        // let USER = AsyncStorage.getItem('userId');
    }

    _load = async () => {
        this.setState({messages:
        [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ]})

    }
    componentDidMount() {
      this._load();

      }
      sendMessage(message) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }))
      }
    //   renderInputToolbar (props) {
    //     //Add the extra styles via containerStyle
    // //    return <InputToolbar {...props} 
    // //    containerStyle={{
    // //        width:w*0.9,
    // //     // marginTop:h*0.01,
    // //     borderTopLeftRadius:15,borderTopRightRadius:15,
    // //     borderRadius:15,
    // //     // backgroundColor:'red'
    // //     // marginBottom:h*0.05,
    // //     // height:h*0.07,

    // // }} 
    // // />
    // console.log(this.state.msg);
    // return <View style={{width:w*0.8,alignSelf:'center',height:w*0.13,backgroundColor:'white',borderRadius:15}}>
    //      <Input
    //           containerStyle={styles.input}
    //           placeholder='Email'
    //           placeholderTextColor="#ADADAC" 
    //           // inputStyle={styles.inputText}
    //           inputContainerStyle={{borderBottomWidth: 0}}
    //           onChangeText={(text) => this.setState({msg:text})}
    //           value={this.state.msg}
    //           // leftIcon={
    //           //   <Icon1
    //           //   name='mail'
    //           //   size={24}
    //           //     color="#ADADAC"
    //           //   />
    //           // }
    //           // leftIconContainerStyle={{marginLeft:7,marginRight:8}}
    //           />
    // </View>
    //  }

   
render() {
    if (this.state.loading) {
        this.props.renderLoading === null ? <ActivityIndicator /> : this.props.renderLoading
    }
    
    return (
    <View style={styles.container}>
        <GiftedChat 
        messages={this.state.messages}
        onSend={message =>this.sendMessage(message)}
        user={{
            _id: 1,
          }}
        
        // textInputStyle={{color:'red'}}
        // renderInputToolbar={this.renderInputToolbar} 
        textInputStyle={{
          // backgroundColor:'red',
          // width:w*0.2,
        }}
        renderBubble={props => {
            return (
              <Bubble
                {...props}
                textStyle={{
                  right: {
                    color: 'black',
                  },
                  left: {
                    color:'black'
                  },
                  
                }}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#AEADAC',
                      },
                  left: {
                    backgroundColor: '#E4E4E3',
                  },
                }}
              />
            );
          }}
        
        
        />
        {/* <View style={{height:20}}/> */}

        </View>);}
}

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:'#F2F8FF'
    },
    input:{
      width:w,
      
    }
});