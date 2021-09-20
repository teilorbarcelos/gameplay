import React, { useEffect, useState } from "react"
import { ImageBackground, Linking, Platform, Share, Text, View } from "react-native"
import { BorderlessButton, FlatList } from "react-native-gesture-handler"
import { Fontisto } from '@expo/vector-icons'

import BannerImg from '../../assets/banner.png'
import { Background } from "../../components/Background"
import { Header } from "../../components/Header"
import { theme } from "../../global/styles/theme"
import { styles } from "./styles"
import { ListHeader } from "../../components/ListHeader"
import { Member, MemberProps } from "../../components/Member"
import { ListDivider } from "../../components/ListDivider"
import { ButtonIcon } from "../../components/ButtonIcon"
import { AppointmentProps } from "../../components/Appointment"
import { useRoute } from "@react-navigation/core"
import { api } from "../../services/api"
import { Load } from "../../components/Load"

interface Params {
    guildSelected: AppointmentProps
}

interface GuildWidget {
    id: string
    name: string
    instant_invite: string
    members: MemberProps[]
}

export function AppointmentDetails() {
    const route = useRoute()
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)
    const [loading, setLoading] = useState(true)

    const { guildSelected } = route.params as Params

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`)
            setWidget(response.data)
        } catch {
            alert('Verifique as configurações do servidor. O widget está habilitado?')
        } finally {
            setLoading(false)
        }
    }

    async function handleShareInvite() {
        const message = Platform.OS === 'ios' ?
            `Junte-se a ${guildSelected.guild.name}` :
            widget.instant_invite

        Share.share({
            message,
            url: widget.instant_invite
        })
    }

    async function handleOpenGuild() {
        Linking.openURL(widget.instant_invite)
    }

    useEffect(() => {
        fetchGuildWidget()
    }, [])

    return (
        <Background>
            <Header
                title="Detalhes"
                action={guildSelected.guild.owner &&
                    <BorderlessButton
                        onPress={handleShareInvite}
                    >
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
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        {guildSelected.guild.name}
                    </Text>

                    <Text style={styles.subtitle}>
                        {guildSelected.description}
                    </Text>
                </View>
            </ImageBackground>

            {loading ?

                <Load />

                :

                <>

                    <ListHeader
                        title="Jogadores"
                        subtitle={`Total ${widget.members.length}`}
                    />

                    <FlatList
                        data={widget.members}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Member
                                data={item}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        style={styles.member}
                    />
                </>
            }

            {guildSelected.guild.owner &&
                <View style={styles.footer}>
                    <ButtonIcon
                        onPress={handleOpenGuild}
                        title="Entrar na partida"
                    />
                </View>
            }

        </Background>
    )
}