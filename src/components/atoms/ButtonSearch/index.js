import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonSearch = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.container}>
                <Text>Search</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonSearch

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'grey',
        height: 50,
        width: 50,
        justifyContent: 'center',
        marginLeft: 5,
        padding: 3
    }
})
