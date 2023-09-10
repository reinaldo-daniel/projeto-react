import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default function Button ({title, onPress}) {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={style.button}
        >
            <Text style={style.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: '#F24464',
        paddingHorizontal: 40,
        paddingVertical: 5,
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        fontSize: 22,
    }
})