import Feather from '@expo/vector-icons/build/Feather'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

interface Props {
    title: string
    remove?: ReactNode
    action?: ReactNode
}

export function Header({ title, remove, action = false }: Props) {
    const { secondary100, secondary40, heading } = theme.colors

    const navigation = useNavigation()

    function handleGoBack() {
        navigation.goBack()
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton
                onPress={handleGoBack}
            >
                <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            <View style={styles.removeButton}>
                {remove}
            </View>

            {action ?
                <View>
                    {action}
                </View>
                :
                <View style={{ width: 24 }} />
            }
        </LinearGradient>
    )
}