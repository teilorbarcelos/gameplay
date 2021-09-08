import React from 'react'
import {
    Text,
    TouchableOpacityProps,
    TouchableOpacity,
    View
} from 'react-native'

import { Feather } from '@expo/vector-icons'
import { GuildIcon } from '../GuildIcon'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'

export interface GuildProps {
    id: string
    name: string
    icon: string | null
    owner: boolean
}

interface Props extends TouchableOpacityProps {
    data: GuildProps
}

export function Guild({ data, ...rest }: Props) {

    return (
        <TouchableOpacity
            activeOpacity={.7}
            style={styles.container}
            {...rest}
        >
            <GuildIcon />

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>

                    <Text style={styles.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>

            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}
            />

        </TouchableOpacity>
    )
}