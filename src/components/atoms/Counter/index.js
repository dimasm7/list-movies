import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Counter = ({text, onPress}) => { 
    return(
        <TouchableOpacity onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default Counter

const styles = StyleSheet.create({})
