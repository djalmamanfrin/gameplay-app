import React, { useState }  from "react";
import { Text, View, ScrollView, Platform, KeyboardAvoidingView, Modal } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";


import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { GuildProps } from "../../components/Guild";
import { Header } from '../../components/Header';
import { ModalView } from '../../components/ModalView';
import { SmallInput } from '../../components/SmallInput';

import { TextArea } from '../../components/TextArea';


import { Guilds } from '../Guilds';
import { styles } from "./styles";
import { theme } from "../../global/styles/themes";

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleOpenModal() {
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }

    function handleSetGuildSelected(guildSelected: GuildProps) {
        setGuild(guildSelected);
        setOpenModal(false);
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView>
                <Background>
                    <Header
                        title="Agendar Partida"
                    />
                    <Text style={[
                        styles.label,
                        {marginLeft: 24, marginTop: 16, marginBottom: 8}
                    ]}> Categoria </Text>
                    <CategorySelect
                        hasCheckBox
                        setCategory={setCategory}
                        categorySelected={category}
                    />
                    <View style={styles.form}>
                        <RectButton onPress={handleOpenModal}>
                            <View style={styles.select}>
                                {
                                    guild.icon ? <GuildIcon/> : <View style={styles.image}/>
                                }

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {
                                            guild.name ? guild.name : 'Selecione um servidor'
                                        }
                                    </Text>
                                </View>
                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </View>
                        </RectButton>

                        <View style={styles.field}>
                            <View>
                                <Text style={[styles.label, {marginBottom: 8}]}>
                                    Dia e Mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}> / </Text>
                                    <SmallInput maxLength={2}/>
                                </View>
                            </View>
                            <View>
                                <Text style={[styles.label, {marginBottom: 8}]}>
                                    Hora e Minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}> : </Text>
                                    <SmallInput maxLength={2}/>
                                </View>
                            </View>
                        </View>

                        <View style={styles.field}>
                            <Text style={[styles.label, {marginBottom: 8}]}>
                                Descrição
                            </Text>
                            <Text style={styles.description}>
                                Max de 100 caracteres
                            </Text>
                        </View>
                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />
                        <View style={styles.footer}>
                            <Button
                                title="Agendar"
                            />
                        </View>
                    </View>
                </Background>
            </ScrollView>
            <ModalView visible={openModal} close={handleCloseModal}>
                <Guilds handleGuildSelected={handleSetGuildSelected}/>
            </ModalView>
        </KeyboardAvoidingView>
    )
}