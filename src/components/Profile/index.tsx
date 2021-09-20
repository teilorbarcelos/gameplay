import React from "react"
import { Alert, Text, View } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { useAuth } from "../../hooks/useAuth"
import { Avatar } from "../Avatar"
import { styles } from "./styles"

export function Profile() {
    const { user, signOut } = useAuth()

    async function handleSignOut() {
        Alert.alert(
            'Logout',
            'Deseja sair do GamePlay?',
            [
                {
                    text: 'Não',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    style: 'destructive',
                    onPress: () => signOut()
                }
            ]
        )
    }

    return (
        <View style={styles.container}>

            <RectButton
                onPress={handleSignOut}
            >
                <Avatar urlImage={user.avatar} />
            </RectButton>


            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.userName}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

        </View>
    )
}