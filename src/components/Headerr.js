import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"

import Button from './Buttonn'

export default function Headerr({ navigation }) {

    const handleExtra = () => {
        navigation.navigate('Extra');
    }
    return (
        <View style={style.container}>
            <Text style={style.title}>
                Tudo sobre valorant
            </Text>
            <View style={style.containerButtons}>
                <Button title={'Página extra'} onPress={handleExtra} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        gap: 25,
    },
    title: {
        color: '#fff',
        fontSize: 30,
    },
    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40
    }
})