import React from "react"
import { Image, StyleSheet } from "react-native"

export default function PersonCards({ urlImage, }) {
    return (
        <>
            <Image
                source={{ uri: urlImage }}
                style={style.imagens}
            />
        </>
    )
}

const style = StyleSheet.create({
    imagens: {
        width: 350,
        height: 250
    }
})