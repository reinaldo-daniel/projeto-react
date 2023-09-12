// @ts-nocheck
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import axios from "axios";

import AgentCard from "../components/AgentCard";
import Buttonn from "../components/Buttonn";
import Headerr from "../components/Headerr";

export default function Home() {
    const [agentes, setAgentes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios('https://valorant-api.com/v1/agents', {
            params: {
                language: 'pt-BR',
                isPlayableCharacter: true,
            }
        }).then(response => {
            const { data: { data: resAgentes } } = response;
            setAgentes(resAgentes);
            setLoading(false);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    if (loading) {
        return <Text>Carregando...</Text>;
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <Headerr />
            {agentes.map((data, index) => {
                const { bustPortrait, displayName } = data;
                return (
                    <AgentCard key={index} urlImage={bustPortrait} name={displayName} />
                )
            })}
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1, // Isso faz com que o ScrollView cresça para acomodar o conteúdo
        backgroundColor: '#121E26',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
});