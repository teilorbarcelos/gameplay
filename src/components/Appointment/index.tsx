import React from "react"
import { View, Text, Image } from "react-native"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"

import { categories } from "../../utils/categories"
import { GuildIcon } from "../GuildIcon"
import { styles } from "./styles"
import { theme } from "../../global/styles/theme"
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { useNavigation } from "@react-navigation/core"
import { GuildProps } from "../Guild"
import { LinearGradient } from "expo-linear-gradient"

export interface AppointmentProps {
    id: string
    guild: GuildProps
    category: string
    date: string
    description: string
}

interface Props extends RectButtonProps {
    data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id === data.category)
    const { owner } = data.guild
    const { primary, on, secondary50, secondary70 } = theme.colors
    const navigation = useNavigation()

    function handleAppointmentDetails(guildSelected: AppointmentProps) {
        navigation.navigate('AppointmentDetails', {guildSelected})
    }

    return (
        <RectButton
            {...rest}
            onPress={() => handleAppointmentDetails(data)}
        >
            <View style={styles.container}>
                <LinearGradient
                    style={styles.guildIconContainer}
                    colors={[secondary50, secondary70]}
                >
                    <GuildIcon
                        guildId={data.guild.id}
                        iconId={data.guild.icon}
                    />
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />

                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>

                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={owner ? primary : on} />

                            <Text
                                style={[styles.player, { color: owner ? primary : on }]}
                            >
                                {owner ? 'Anfitri??o' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}