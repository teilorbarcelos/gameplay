import React from "react"
import { Image, Text, View } from "react-native"
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon"

export function SignIn() {
    return (
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

                <ButtonIcon title="Entrar com Discord" activeOpacity={.8} />

            </View>

        </View>
    )
}