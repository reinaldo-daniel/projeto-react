import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"

import Button from './Buttonn'

export default function Headerr() {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                Tudo sobre valorant
            </Text>
            <View style={style.containerButtons}>
                <Button title={'Agentes'} onPress={() => { console.log('Agentes'); }} />
                <Button title={'Mapas'} onPress={() => { console.log('Mapas'); }} />
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
        gap: 40
    }
})