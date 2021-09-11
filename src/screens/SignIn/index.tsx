import React from "react"
import { Image, Text, View } from "react-native"
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon"
import { useNavigation } from "@react-navigation/native"
import { Background } from "../../components/Background"
import { useAuth } from "../../hooks/useAuth"

export function SignIn() {
    const navigation = useNavigation()
    const { user } = useAuth()
    console.log(user)

    function handleSignIn() {
        navigation.navigate('Home')
    }

    return (
        <Background>
            <View style={styles.container}>

                <Image
                    source={IllustrationImg}
                    resizeMode="stretch"
                    style={styles.image}
                />

                <View style={styles.content} >

                    <Text style={styles.title} >
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle} >
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon
                        title="Entrar com Discord"
                        onPress={handleSignIn}
                    />

                </View>

            </View>
        </Background>
    )
}