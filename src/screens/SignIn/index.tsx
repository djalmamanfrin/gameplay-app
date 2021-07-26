import React, { useState } from "react";
import { View, Text, Image, Alert  } from "react-native";

import { useAuth } from "../../hooks/auth";

import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import  IllustrationImg from '../../assets/illustration.png';
import { styles } from "./styles";

export function SignIn() {
    const { user, signIn } = useAuth();

     async function handleSignIn() {
        try {
            await signIn();
        } catch (e) {
            Alert.alert(e);
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'} e Organize suas {'\n'} jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'} favoritos com seus amigos
                    </Text>

                    <ButtonIcon
                        title="Entrar com o Discord"
                        onPress={handleSignIn}
                    />
                </View>
            </View>
        </Background>
    )
}