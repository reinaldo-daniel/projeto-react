import React from "react"
import { Text, Image, StyleSheet } from "react-native"

export default function AgentCard({ urlImage, name, role }) {
    return (
        <>
            <Image 
                source={{ uri: urlImage }}
                alt={name}
                style={{ width: 100, height: 100 }}
            />
            <Text >{role}</Text>
            <Text style={style.info}>{name}</Text>
        </>
    )
}

const style = StyleSheet.create({
    info: {
        color: '#fff'
    }
})