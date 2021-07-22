import React, { useState }  from "react";
import { Text, View, ScrollView, Platform, KeyboardAvoidingView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";


import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';


import { styles } from "./styles";
import { theme } from "../../global/styles/themes";

export function AppointmentCreate() {
    const [category, setCategory] = useState('');
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
                        {marginLeft: 24, marginTop: 32}
                    ]}> Categoria </Text>
                    <CategorySelect
                        hasCheckBox
                        setCategory={setCategory}
                        categorySelected={category}
                    />
                    <View style={styles.form}>
                        <RectButton>
                            <View style={styles.select}>
                                {/*<View style={styles.image}/>*/}
                                <GuildIcon/>
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}> Selecione um servidor</Text>
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
                                <Text style={styles.label}>
                                    Dia e Mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput maxLength={2}/>
                                    <Text style={styles.divider}> / </Text>
                                    <SmallInput maxLength={2}/>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.label}>
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
                            <Text style={styles.label}>
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
        </KeyboardAvoidingView>
    )
}