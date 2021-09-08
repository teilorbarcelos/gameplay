import React from "react"
import { View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { Guild, GuildProps } from "../../components/Guild"
import { ListDivider } from "../../components/ListDivider"
import { styles } from "./styles"

interface Props {
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'https://wiki.faforever.com/images/e/e9/Discord-icon.png',
            owner: true
        },
        {
            id: '2',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '3',
            name: 'Lendários',
            icon: null,
            owner: true
        },
        {
            id: '4',
            name: 'Lendários',
            icon: null,
            owner: true
        },
    ]

    return (
        <View style={styles.container}>
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
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.guilds}
            />
        </View>
    )
}