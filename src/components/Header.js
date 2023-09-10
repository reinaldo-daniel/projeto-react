import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"

import Button from './Button'

export default function Header () {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                Tudo sobre valorant
            </Text>
            <View style={style.containerButtons}>
                <Button title={'Agentes'} onPress={() => {console.log('Agentes');}}/>
                <Button title={'Mapas'} onPress={() => {console.log('Mapas');}}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
    },
    title: {
        color: '#fff',
        fontFamily: 'Valorant Font.ttf'
    },
    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 40
    }
})