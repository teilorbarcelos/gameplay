import React from "react"
import { ImageBackground, Text, View } from "react-native"
import { BorderlessButton, FlatList } from "react-native-gesture-handler"
import { Fontisto } from '@expo/vector-icons'

import BannerImg from '../../assets/banner.png'
import { Background } from "../../components/Background"
import { Header } from "../../components/Header"
import { theme } from "../../global/styles/theme"
import { styles } from "./styles"
import { ListHeader } from "../../components/ListHeader"
import { Member } from "../../components/Member"
import { ListDivider } from "../../components/ListDivider"
import { ButtonIcon } from "../../components/ButtonIcon"

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            userName: 'Teilor',
            avatar_url: 'https://avatars.githubusercontent.com/u/80414833?v=4',
            status: 'online'
        },
        {
            id: '2',
            userName: 'Lucas',
            avatar_url: 'https://avatars.githubusercontent.com/u/80414833?v=4',
            status: 'offline'
        },
        {
            id: '3',
            userName: 'Paulo',
            avatar_url: 'https://avatars.githubusercontent.com/u/80414833?v=4',
            status: 'offline'
        },
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
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
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member
                        data={item}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.member}
            />

            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na partida"
                />
            </View>
        </Background>
    )
}