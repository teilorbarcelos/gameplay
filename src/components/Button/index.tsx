import React from 'react'
import { Text} from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'

interface Props extends RectButtonProps {
    title: string
}

export function Button({title, ...rest}: Props) {
    return (
        <RectButton
            style={styles.container}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}