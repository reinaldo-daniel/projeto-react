import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, ScrollView } from "react-native"
import axios from "axios";

import AgentCard from "../components/AgentCard";

export default function Home () {
    const [ agentes, setAgentes ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        axios('https://valorant-api.com/v1/agents', {
            params: {
                language: 'pt-BR',
                isPlayableCharacter: true,
            }
        }).then(response => {
            const {data: { data: resAgentes }} = response;

            setAgentes(resAgentes);
            setLoading(false);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    if (loading) {
        return <Text>Carregando...</Text>;
    }

    console.log(agentes);

    return (
        <View>
            <Text style={style.title}>
                Home..
            </Text>
            {agentes.map((data, index) => {
                const {bustPortrait, displayName } = data;

                return (
                    <AgentCard key={index} urlImage={bustPortrait} name={displayName} />
                )
            })}
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        color: '#fff',
    }
})