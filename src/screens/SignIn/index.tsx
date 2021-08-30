import React from "react"
import { Image, StatusBar, Text, View } from "react-native"
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon"

export function SignIn() {
    return (
        <View style={styles.container}>

            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />

            <Image
                source={IllustrationImg}
                resizeMode="stretch"
                style={styles.image}
            />

            <View style={styles.content} >

                <Text style={styles.title} >
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>

                <Text style={styles.subtitle} >
                    Crie grupos para jogar seus games favoritos {`\n`}
                    com seus amigos
                </Text>

                <ButtonIcon title="Entrar com Discord" activeOpacity={.8} />

            </View>

        </View>
    )
}