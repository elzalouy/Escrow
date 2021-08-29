import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet   } from 'react-native'

export default class LockCode extends Component {
    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>    
                <Text> textInComponent </Text>
            </ScrollView>
        )
    }
}


const styles=   StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:'#F2F8FF',
    },
})