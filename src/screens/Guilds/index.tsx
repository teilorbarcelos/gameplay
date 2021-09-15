import React, { useEffect, useState } from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Guild, GuildProps } from "../../components/Guild"
import { ListDivider } from "../../components/ListDivider"
import { Load } from "../../components/Load"
import { api } from "../../services/api"
import { styles } from "./styles"

interface Props {
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([])
    const [loading, setLoading] = useState(true)

    async function fetchGuilds() {
        const response = await api.get('/users/@me/guilds')

        setGuilds(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fetchGuilds()
    },[])

    return (
        <View style={styles.container}>
            {loading ?

                <Load /> :

                <FlatList
                    data={guilds}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Guild
                            onPress={() => handleGuildSelect(item)}
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider isCentered />}
                    contentContainerStyle={{ paddingBottom: 68, paddingTop: 32 }}
                    style={styles.guilds}
                />
            }
        </View>
    )
}