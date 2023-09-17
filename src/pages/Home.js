// @ts-nocheck
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
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
        <FlatList
            contentContainerStyle={style.container}
            data={agentes}
            renderItem={({ item }) => (
                <AgentCard urlImage={item.bustPortrait} name={item.displayName} />
            )}
            ListHeaderComponent={<Headerr />}
        />
    );
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#121E26',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
});