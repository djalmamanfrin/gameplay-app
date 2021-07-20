import React from "react";
import { Text, View, ImageBackground, FlatList } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

import BannerImg from "../../assets/banner.png";


import { styles } from "./styles";
import { theme } from "../../global/styles/themes";

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Djalma Manfrin',
            avatar_url: 'https://github.com/djalmamanfrin.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Murilo Manfrin',
            avatar_url: 'https://github.com/djalmamanfrin.png',
            status: 'offline'
        },
    ]
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground
                style={styles.banner}
                source={BannerImg}
            >
                <View style={styles.content}>
                    <Text style={styles.title}> Lendários </Text>
                    <Text style={styles.subtitle}> Lendários </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={ ({ item }) => (
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida"/>
            </View>

        </Background>
    )
}