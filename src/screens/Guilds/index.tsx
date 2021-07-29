import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { styles } from "./styles";
import { api } from "../../servers/api";

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected } : Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds(){
    return await api.get('/users/@me/guilds');
  }

  useEffect(() => {
    fetchGuilds()
      .then((response) => {
          setGuilds(response.data);
          setLoading(false);
      });
  },[]);
  
    return (
        <View style={styles.container}>
      {
        loading ? <Load /> :
        <FlatList 
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild 
              data={item} 
              onPress={() => handleGuildSelected(item)}
            />
          )}    
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider width="71%" />}
          contentContainerStyle={{ paddingBottom: 16 }}
          style={styles.guilds}
        />
      }
    </View>
    )
}
