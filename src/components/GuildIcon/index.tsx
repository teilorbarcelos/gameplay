import React from "react"
import { Image, View } from "react-native"
import { CDN_IMAGE } from "../../configs"
import { styles } from "./styles"
import DefaultImg from '../../assets/discord.svg'

interface Props {
    guildId: string
    iconId: string | null
}

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.jpg`

    return (
        <View style={styles.container}>
            {iconId ?

                <Image
                    source={{ uri }}
                    style={styles.image}
                    resizeMode="cover"
                /> :

                <DefaultImg
                    width={40}
                    height={40}
                />
            }
        </View>
    )
}