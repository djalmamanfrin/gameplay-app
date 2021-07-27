import React from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from "./styles";

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected } : Props) {
    const guilds = [
        {
            id: '1',
            name: 'Djalma Manfrin',
            icon: 'xpto',
            owner: true
        },
        {
            id: '2',
            name: 'Murilo Manfrin',
            icon: null,
            owner: true
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelected(item)}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider width={'71%'} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 16}}
                style={styles.guilds}
            />
        </View>
    )
}