// @ts-nocheck
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";
import PersonCards from "../components/PersonCards";

const CharacterList = () => {
    const [personagens, setPersonagens] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                const { data: { results: resPersonagens } } = response;
                setPersonagens(resPersonagens);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <View>
            <Text style={style.texto}>Imagens Ricky and Morty</Text>
            <FlatList
                style={style.imagens}
                contentContainerStyle={style.container}
                data={personagens}
                renderItem={({ item }) => (
                    <PersonCards urlImage={item.image} />
                )}
            />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#121E26',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
    },
    texto: {
        textAlign: "center",
    },
    imagens: {

    }
});

export default CharacterList;